const { createNewOrder, getOrders } = require("../interactors/order");
const { parseOrdersByAdmin } = require("../serializers/orders");


const newOrder = ({ body, userId }, res, next) =>
  createNewOrder(body, userId)
    .then(() => res.status(201).send())
    .catch(next);

const getAllOrders = (_, res, next) =>
  getOrders()
    .then((orders) => res.status(200).send(parseOrdersByAdmin(orders)))
    .catch(next);

    module.exports = {newOrder, getAllOrders};