const path = require('path');
const express = require('express');
require("dotenv").config();
const cors = require("cors");
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
