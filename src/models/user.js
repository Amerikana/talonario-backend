const {Schema, model} = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
      default: 'costumer',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model('users', userSchema);
module.exports = User;
