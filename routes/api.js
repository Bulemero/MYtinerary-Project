const express = require("express");
const router = express.Router();

//get a list of cities from the database
router.get("/cities", function(req, res) {
  res.send({ type: "GET" });
});

//add a new city to the db
router.post("/cities", function(req, res) {
  console.log(req.body);
  res.send({
    type: "POST",
    city: req.body.city,
    country: req.body.country
  });
});

//update a city in the database
router.put("/cities/:id", function(req, res) {
  res.send({ type: "PUT" });
});

//delete a city from the database
router.delete("/cities/:id", function(req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
