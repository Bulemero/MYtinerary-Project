const express = require("express");
const router = express.Router();
const Itinerary = require("../models/Itinerary");

//get a list of itineraries from the database
router.get("/itineraries", function(req, res, next) {
  Itinerary.find({})
    .sort({ itinerary: 1 })
    .then(function(itineraries) {
      res.send(itineraries);
    });
});

//add a new itinerary to the db
router.post("/itineraries", function(req, res, next) {
  Itinerary.create(req.body)
    .then(function(itinerary) {
      res.send(itinerary);
    })
    .catch(next);
});

//update an itinerary in the database
router.put("/itineraries/:id", function(req, res, next) {
  Itinerary.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    function() {
      Itinerary.findOne({ _id: req.params.id }).then(function(itinerary) {
        res.send(itinerary);
      });
    }
  );
});

//delete an itinerary from the database
router.delete("/itineraries/:id", function(req, res, next) {
  Itinerary.findByIdAndRemove({ _id: req.params.id }).then(function(itinerary) {
    res.send(itinerary);
  });
});

module.exports = router;
