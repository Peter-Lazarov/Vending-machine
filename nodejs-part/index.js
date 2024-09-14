const express = require('express');
const server = express();
const port = 3000;
const cors = require('cors');

server.use(express.json());

const products = [
    { id: 1, name: 'Croissant', quantity: "10", price: 1.5},
    { id: 2, name: 'Waffle', quantity: "11", price: 0.5},
    { id: 3, name: 'Snack-with-protein', quantity: "12", price: 2.0},
    { id: 4, name: 'Juice', quantity: "5", price: 4.8},
    { id: 5, name: 'Tea', quantity: "15", price: 2.2}
]

server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));

server.get('/products', (request, response) => {
    response.json(products);
});

server.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`);
});
