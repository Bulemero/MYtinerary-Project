const express = require("express");
const router = express.Router();
const City = require("../models/city");

//get a list of cities from the database
router.get("/cities", function(req, res, next) {
  City.find({}).then(function(cities) {
    res.send(cities);
  });
});

//add a new city to the db
router.post("/cities", function(req, res, next) {
  City.create(req.body)
    .then(function(city) {
      res.send(city);
    })
    .catch(next);
});

//update a city in the database
router.put("/cities/:id", function(req, res, next) {
  City.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    City.findOne({ _id: req.params.id }).then(function(city) {
      res.send(city);
    });
  });
});

//delete a city from the database
router.delete("/cities/:id", function(req, res, next) {
  City.findByIdAndRemove({ _id: req.params.id }).then(function(city) {
    res.send(city);
  });
});

module.exports = router;
