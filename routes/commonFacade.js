var async = require('async');
var MyBill = require('../models/myBill');
var MyCart = require('../models/myCart');
var ProductItem = require('../models/productItem');
var OrderItem = require('../models/orderItem');

module.exports = {
    updateCartOrderItem: function (cartId, orderItemId, res) {
        MyCart.update({ _id: cartId }, { $push: { orderItem: orderItemId } }, function (err) {
            if (err) {
                res.json({ success: false, message: "error" });
            } else {
                res.json({ success: true, message: "successfully added to cart" });
            }
        });
    },

    generateBill: function (req, res, next) {
        var cartId = req.body.myCart;
        let rsp = {};
        console.log("cartId: " + cartId);
        const tasks = [
            function createBill(cb) {
                const myBill = new MyBill({
                    myCart: cartId
                });
                myBill.save(function (err, myBillRes) {
                    if (err) {
                        return cb(err);
                    }
                    rsp.myBill = myBillRes;
                    return cb(null, myBillRes);
                });
            },
            function getOrderItems(cb) {
                MyCart.findOne({ _id: cartId }, function (err, myCartRes) {
                    if (err) {
                        return cb(err);
                    }
                    rsp.orderItems = myCartRes.orderItem;
                    return cb(null, myCartRes.orderItem)
                })
            },

            function getOrderItemDetails(cb) {
                rsp.productItems = [];
               
                OrderItem.find({ _id: { $in: rsp.orderItems }}).populate('productItem').exec(function (err, orderItems) {
                     if (err) {
                         return cb(err);
                    }
                    console.log("aruna: "+ JSON.stringify(orderItems));
                    orderItems.forEach(function(orderItem){
                        rsp.productItems.push(orderItem.productItem);
                    });
                    return cb(null, rsp.productItems);
                });
            },

            function calculateTotal(cb) {
                var total = 0;
                rsp.productItems.forEach(function (item) {
                    total = total + Number(item.price);
                });
                rsp.total = total;
                return cb(null, rsp.total);
            }
        ];
        async.series(tasks, (err, results) => {
            if (err) {
                return next(err);
            }
            return res.json(results);
        })
    }

}