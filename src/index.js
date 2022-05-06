const express = require("express");

//importing router from controllers

const productsController = require("./controllers/product.controllers");

const app = express();
const cors=require("cors")
app.use(cors())
app.use(express.json());

app.use("/products", productsController);

module.exports = app;
