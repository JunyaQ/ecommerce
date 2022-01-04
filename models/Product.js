// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns id, product name, price, stock, category id
    //id: integer, not allow null, primary key, auto increment
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    //product name: string, not allow null
    product_name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    //price:decial, does not allow null, valudate decimal
    price:{
      type:DataTypes.DECIMAL,
      allowNull:false,
      validate:{
        isDecimal:true,
      },
    },
    //stock: integer, does not allow null, set default 10, validate numeric
    stock:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10,
      validate:{
        isNumeric:true,
      },
    },
    //category id: integer, reference category model id
    category_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'Category',
        key:'id',
      },
    }
  },
  
    //
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
