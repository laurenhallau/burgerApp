//Dependencies
const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

//Different routes invoke different burger functions

router.get("/", function(req,res) {
    res.redirect("/burgers");
  });
  
  router.get("/burgers", function(req,res) {
  
      burger.all(function(data) {
        // var hbsObject = {
        //   burger_data: data
        // };
        // console.log(hbsObject);
        res.render("index", {burger_data : data });
      });
  
  });
  
  router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
  
    });
     res.redirect("/");
  });
  
  router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result) {
      console.log(result);
  
    });
     res.redirect("/");
  });

// Export routes for server.js to use.
module.exports = router;