# Ecommerce
## Ecommerce backend application
This application is to update the ecommerce store data, including, 
- Product (id, product name, price, stock and category)
- Category (id, category name)
- Tag (id, tag name)
- product tag (id, product id and tag id)<br/>
It is well routed which means you can check different product, category, tag or product tag, and do delete, edit (update) or add new product/category/ tag/ product tag

## About the application
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file<br/>
THEN I am able to connect to a database using Sequelize<br/>
WHEN I enter schema and seed commands<br/>
THEN a development database is created and is seeded with test data<br/>
WHEN I enter the command to invoke the application<br/>
THEN my server is started and the Sequelize models are synced to the MySQL database<br/>
WHEN I open API GET routes in Insomnia for categories, products, or tags<br/>
THEN the data for each of these routes is displayed in a formatted JSON<br/>
WHEN I test API POST, PUT, and DELETE routes in Insomnia<br/>
THEN I am able to successfully create, update, and delete data in my database<br/>

## Set up the database
- mysql -u root -p 
- enter the password for mysql
- source db/schema.sql
- use ecommerce_db
- npm run seed <br/>

## Testing application with Insomnia
In the console, make connection to localhost, with "npm run start"<br/>

### Categories
- get all from cateogries: http://localhost:3001/api/categories
- get one item from categories: http://localhost:3001/api/categories/:id
- update category with changed information: http://localhost:3001/api/categories/:id
- create new category: http://localhost:3001/api/categories
- delete category: http://localhost:3001/api/categories/:id

### Tags
- get all from tags: http://localhost:3001/api/tags
- get one item from tags: http://localhost:3001/api/tags/:id
- update tags with changed information: http://localhost:3001/api/tags/:id
- create new tag: http://localhost:3001/api/tags
- delete tag: http://localhost:3001/api/tags/:id


### products
- get all from products: http://localhost:3001/api/products
- get one item from products: http://localhost:3001/api/products/:id
- update product with changed information: http://localhost:3001/api/products/:id
- create new product: http://localhost:3001/api/products
- delete product: http://localhost:3001/api/products/:id

## Technologies use
- Javascript
- Node js
- Express js
- MySQL

## video with demo
- [set up database](https://drive.google.com/file/d/19eN0DRbkk8A3mHSa0nB_RZSXu6WowEeo/view?usp=sharing)<br/>
- [insomnia walkthrough](https://drive.google.com/file/d/1B9xWh8V_cwEqNyBsH1glXVvFZfi-uWTp/view?usp=sharing)
