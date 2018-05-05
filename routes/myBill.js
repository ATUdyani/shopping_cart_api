var MyBill  = require('../models/myBill.js');

var myBill = {

    get: function(req, res) {
      var id = req.params.id;
      MyBill.getBill(id, function(err,myBill){
        if (err){
          throw err ;
        }
        res.json(myBill);
      })
    },
   
    create: function(req, res) {
      var myBill = req.body;
      MyBill.addBill(myBill, function(err,myBill){
        if (err){
          throw err ;
        }
        res.json(myBill);
      })
      res.json(myBill);
    }
}

module.exports = myBill;