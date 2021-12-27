// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Category');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:'category_id',
})

// Categories have many Products
Category.hasMany(Product,{
  foreignKey:"category_id",
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through:ProductTag,
  as:'product_id',
  foreignKey:'product_id',
})
// Tags belongToMany Products (through ProductTag)(
Tag.belongsToMany(Product,{
  through:ProductTag,
  as:'tag_id',
  foreignKey:'tag_id',

})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
