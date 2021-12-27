const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns: id, product id, tag id
    //id: integer, not allow null, promary key, auto increment
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    //product id: integer, reference product id
    product_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'Product',
        key:'id',
      },
    },
    //tag id: integer, reference tag id
    tag_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'tag',
        key:'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
