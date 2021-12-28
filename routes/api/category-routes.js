const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//id and category_name

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes:['id','category_name'],
    include:[{
      model:Product,
      attributes:['id', 'product_name', 'price', 'stock', 'category_id'],
    }]
  })
  .then(dbProductData=> res.json(dbProductData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:{
      id:req.params.id,
    },
    attributes:['id','category_name'],
    include:[{
      model:Product,
      attributes:['id', 'product_name', 'price', 'stock', 'category_id'],
    }]
  })
  .then(dbOneData=>{
    if(!dbOneData){
      res.status(404).json({Message:'No category found with this id'});
      return;
    }
     res.json(dbOneData); 
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    Category_id: req.body.category_id,
    category_name: req.body.category_name,
  })
    .then(dbCreateData => res.json(dbCreateData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUpdateData => {
      if (!dbUpdateData) {
        res.status(404).json({message:'No category found with this id'});
        return;
      }
      res.json(dbUpdateData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbDeleteData => {
    if (!dbDeleteData) {
      rs.status(404).json({message: 'No product found with this id'});
      return;
    }
    res.json(dbDeleteData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
