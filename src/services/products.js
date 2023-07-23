const Product = require("../models/product");
const { databaseError } = require("../errors/customError");
const {v4} = require('uuid');

const createProduct = async (title, description, price, stock) => {
  try {
    const uid = v4();
    const newProduct = new Product({ uid, title, description, price, stock });
    await newProduct.save();
    return newProduct;
  } catch (error) {
    console.error(error.message);
    throw databaseError("Ha habdido un error creando un producto");
  }
};

const findProduct = async (where) => {
  try {
    const product = await Product.findOne(where);
    return product;
  } catch (error) {
    console.error(error.message);
    throw databaseError("Ha habido un error buscando un producto");
  }
};

const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.error(error.message);
    throw databaseError("Ha habido un error buscando todos los productos");
  }
};

const updateProduct = async (uid, title, description, price, stock) => {
  try {
    const filter = { uid };
    const update = { title, description, price,stock };
    const newProduct = await Product.findOneAndUpdate(filter, update, {
      new: true,
    });
    return newProduct;
  } catch (error) {
    console.error(error.message);
    throw databaseError("Ha habido un error editando un producto");
  }
};

const deleteProduct = async (uid) => {
  try {
    const filter = { uid };    
    const deleteProduct = await Product.findOneAndDelete(filter);
    console.log(deleteProduct);
    return getAllProducts();
  } catch (error) {
    console.error(error.message);
    throw databaseError("Ha habido un error eliminando el producto");
  }
};


module.exports = {
  createProduct,
  findProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
