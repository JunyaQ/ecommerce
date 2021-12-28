const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//id amnd tag name

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
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
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
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
  // create a new tag
  Tag.create({
    tag_id: req.body.tag_id,
    tag_name: req.body.tag_name,
  })
    .then(dbCreateData => res.json(dbCreateData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
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
  // delete on tag by its `id` value
  Tag.destroy({
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
