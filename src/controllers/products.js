const {
  createNewProduct,
  getProducts,
  getProductByUid,
  putProduct,
  
  deleteOneProduct,
} = require("../interactors/products");
const { parseProductsByUser } = require("../serializers/products");

const newProduct = ({ body }, res, next) =>
  createNewProduct(body)
    .then(() => res.status(201).send())
    .catch(next);

const getAllProducts = (_, res, next) =>
  getProducts()
    .then((products) => res.status(200).send(parseProductsByUser(products)))
    .catch(next);

const getOneProductByUid = ({ params }, res, next) =>
  getProductByUid(params.uid)
    .then((product) => res.status(200).send(product))
    .catch(next);

const putOneProductByUid = ({ params, body }, res, next) =>
  putProduct(params.uid, body)
    .then((product) => res.status(200).send(product))
    .catch(next);

const deleteOneProductByUid = ({ params }, res, next) =>
  deleteOneProduct(params.uid)
    .then((product) => res.status(200).send(product))
    .catch(next);

module.exports = {
  newProduct,
  getAllProducts,
  getOneProductByUid,
  putOneProductByUid,
  deleteOneProductByUid,
};
