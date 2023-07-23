const parseProducts = (products) =>
  products.map((product) => ({
    uid: product.uid,
    nombre: product.title,
    descripcion: product.description,
    precio: product.price,
    stock: product.stock,
  }));

const parseProductsByUser = (products) => ({
  rows: parseProducts(products),
});

module.exports = {parseProductsByUser};
