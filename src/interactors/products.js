const {
  findProduct,
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require('../services/products');

const {conflict, notFoundError} = require('../errors/customError');

const createNewProduct = async ({title, description, price, stock}) => {
  try {
    const product = await findProduct({title});
    if (product) {
      throw conflict('Producto ya existente con este titulo');
    }
    const newProduct = await createProduct(title, description, price, stock);
    return newProduct;
  } catch (error) {
    throw error;
  }
};

const getProducts = async () => {
  try {
    const products = await getAllProducts();
    return products;
  } catch (error) {
    throw error;
  }
};

const getProductByUid = async (uid) => {
  try {
    const product = await findProduct({uid});
    if (!product) {
      throw notFoundError(`producto uid: ${uid} no encontrado`);
    }
    return product;
  } catch (error) {
    throw error;
  }
};


const putProduct = async (uid, {title, description, price, stock}) => {
    
  try {
    const product = await findProduct({uid});
    console.log(product);
    if (!product) {
      throw notFoundError(`producto ${uid} no encontrado`);
    } 
    const Product = await updateProduct(uid, title, description, price, stock);
    return Product;
    
  } catch (error) {
    throw error;
    
  }
  
};

const deleteOneProduct = async (uid) => {
    
  try {
    const product = await findProduct({uid});
    
    if (!product) {
      throw notFoundError(`producto ${uid} no encontrado`);
    } 
    const remainProducts = await deleteProduct(uid);    
    return remainProducts;
    
  } catch (error) {
    throw error;
    
  }
  
}


module.exports = {createNewProduct, getProducts, getProductByUid, putProduct, deleteOneProduct};
