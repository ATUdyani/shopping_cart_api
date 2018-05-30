var express = require('express');
var router = express.Router();
var productItem  = require('./productItem.js');
var ordertItem  = require('./orderItem.js');
var myBill  = require('./myBill.js');
var myCart  = require('./myCart.js');
var user  = require('./user.js');
var auth = require('./auth.js');

router.post('/login', auth.login);
router.post('/signup', user.register);

router.get('/api/v1/productItems', productItem.getAll);
router.get('/api/v1/productItem/:id', productItem.getOne);
router.post('/api/v1/productItem', productItem.create);

router.get('/api/v1/orderItems', ordertItem.getAll);
router.get('/api/v1/orderItem/:id', ordertItem.getOne);
router.post('/api/v1/orderItem', ordertItem.create);

router.get('/api/v1/myBill/:id', myBill.get);
router.post('/api/v1/myBill', myBill.create);

router.get('/api/v1/myCarts', myCart.getAll);
router.get('/api/v1/myCart/:id', myCart.getOne);
router.post('/api/v1/myCart', myCart.create);

router.get('/api/v1/getMyCartId', myCart.getMyCartId);

router.get('/api/v1/users', user.getAll);
router.get('/api/v1/user/:id', user.getOne);

module.exports = router;