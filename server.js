const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static('public'));

// Add this route handler for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const db = require('./db.json');

app.get('/customers', (req, res) => res.json(db.customers));

app.get('/customers/:customerId', (req, res) => {
  const customer = db.customers.find(c => c.id === parseInt(req.params.customerId));
  if (customer) res.json(customer);
  else res.status(404).json({ error: 'Customer not found' });
});

app.get('/customers/:customerId/orders', (req, res) => {
  const customer = db.customers.find(c => c.id === parseInt(req.params.customerId));
  if (customer) res.json(customer.orders);
  else res.status(404).json({ error: 'Customer not found' });
});

app.get('/customers/:customerId/orders/:orderId', (req, res) => {
  const customer = db.customers.find(c => c.id === parseInt(req.params.customerId));
  if (customer) {
    const order = customer.orders.find(o => o.id === parseInt(req.params.orderId));
    if (order) res.json(order);
    else res.status(404).json({ error: 'Order not found' });
  } else res.status(404).json({ error: 'Customer not found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
