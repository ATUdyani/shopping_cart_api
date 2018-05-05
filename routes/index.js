var express = require('express');
var router = express.Router();
var productItem  = require('./productItem.js');
var ordertItem  = require('./orderItem.js');
var myBill  = require('./myBill.js');
var myCart  = require('./myCart.js');
var user  = require('./user.js');

router.get('/api/v1/productItems', productItem.getAll);
router.get('/api/v1/productItem/:id', productItem.getOne);
router.post('/api/v1/productItem/', productItem.create);

router.get('/api/v1/oredrItems', ordertItem.getAll);
router.get('/api/v1/oredrItem/:id', ordertItem.getOne);
router.post('/api/v1/oredrItem/', ordertItem.create);

router.get('/api/v1/myBill/:id', myBill.get);
router.post('/api/v1/myBill/', myBill.create);

router.get('/api/v1/myCarts', myCart.getAll);
router.get('/api/v1/myCart/:id', myCart.getOne);
router.post('/api/v1/myCart/', myCart.create);

router.get('/api/v1/user', user.getAll);
router.get('/api/v1/user/:id', user.getOne);
router.post('/api/v1/user/', user.create);

module.exports = router;