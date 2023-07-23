const parseOrders = (orders) =>
  orders.map((order) => ({
    uid: order.uid,
    nombre: order.title,
    descripcion: order.description,
    preciototal: order.totalprice,
    cantidad: order.quantity,
    _id: order.userId,
  }));

const parseOrdersByAdmin = (orders) => ({
  rows: parseOrders(orders),
});

module.exports = {parseOrdersByAdmin};

