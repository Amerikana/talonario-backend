const {Router} = require('express');
const { newOrder, getAllOrders } = require('../controllers/order');
const {isAuth} = require('../middlewares/auth');
const { createOrderValidation, validate } = require('../middlewares/inputCheck');

const router = Router();

router.post('/', isAuth, createOrderValidation(), validate, newOrder);
router.get('/', isAuth, getAllOrders);

module.exports = router;