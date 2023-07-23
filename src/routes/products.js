const {Router} = require('express');
const {newProduct, getAllProducts, getOneProductByUid, putOneProductByUid, deleteOneProductByUid} = require('../controllers/products');
const {createProductValidation, validate} = require('../middlewares/inputCheck');
const {isAuth} = require('../middlewares/auth');

const router = Router();

router.post('/', isAuth, createProductValidation(), validate, newProduct);
router.get('/', isAuth, getAllProducts);
router.get('/:uid', isAuth, getOneProductByUid);
router.put('/:uid', isAuth, putOneProductByUid);
router.delete('/:uid', isAuth, deleteOneProductByUid);


module.exports = router;
