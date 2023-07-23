const {Schema, model} = require('mongoose');

const orderSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,  
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    totalprice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
  
);

const Order = model('orders', orderSchema);
module.exports = Order;
