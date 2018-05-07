var MyBill  = require('../models/myBill.js');

var myBill = {

    get: function(req, res) {
      var id = req.params.id;
      MyBill.getBill(id, function(err,myBillRes){
        if (err){
          throw err ;
        }
        res.json(myBillRes);
      })
    },
   
    create: function(req, res) {
      var newBill = req.body;
      MyBill.addBill(newBill, function(err,myBillRes){
        if (err){
          throw err ;
        }
        res.json(myBillRes);
      })
    }
}

module.exports = myBill;