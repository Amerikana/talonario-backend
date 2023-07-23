const { notFoundError } = require("../errors/customError");
const { createOrder, getAllOrders } = require("../services/order");
const { getProductByUid } = require("./products");

const createNewOrder = async (
  { title, uidProduct, description, totalprice, quantity },
  userId
) => {
  try {
    const product = await getProductByUid(uidProduct);
    if (product.stock < quantity) {
      throw notFoundError(
        "La cantidad requerida es mayor a la disponible en tienda"
      );
    } else {
      const newOrder = await createOrder(
        title,
        description,
        totalprice,
        quantity,
        userId
      );
      return newOrder;
    }
  } catch (error) {
    throw error;
  }
};

const getOrders = async () => {
  try {
    const orders = await getAllOrders();
    return orders;
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewOrder, getOrders };
