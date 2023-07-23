const {Router} = require('express');
const {signUp, signIn} = require('../controllers/auth');
const {validate, createUserValidation} = require('../middlewares/inputCheck');


const router = Router();
router.post("/signup", createUserValidation(), validate, signUp);
router.post("/signin", signIn);

module.exports = router;