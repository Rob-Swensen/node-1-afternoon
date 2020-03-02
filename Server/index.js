const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

app.use(express.json());

const port = 3004;

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})