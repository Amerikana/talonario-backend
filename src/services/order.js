const Order = require("../models/order");
const { databaseError } = require("../errors/customError");
const {v4} = require('uuid');


const createOrder = async (title, description, totalprice, quantity, userId) => {
  try {
    
    const uid = v4();
    const newOrder = new Order({ uid, title, description, totalprice, quantity, userId });
    await newOrder.save();
    return newOrder;
  } catch (error) {
    console.error(error.message);
    throw databaseError("Ha habdido un error creando la orden");
  }
};

const getAllOrders = async () => {
    try {
      const order = await Order.find();
      return order;
    } catch (error) {
      console.error(error.message);
      throw databaseError("Ha habido un error buscando todas las ordenes");
    }
  };

module.exports = {createOrder, getAllOrders}





