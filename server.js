const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

//connect to MongoDB
mongoose.connect(
  "mongodb+srv://Bulemero:$MERN2019@mern2019-wzxp5.mongodb.net/MERN2019?retryWrites=true",
  {
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise;

//express.static middleware to serve static files to the user

app.use(express.static("public"));

app.use(bodyParser.json());

//initialize routes
app.use("/api", require("./routes/api"));
app.use("/routesItinerary", require("./routes/routesItinerary"));
//error handling middleware
app.use(function(err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

/* below routes are not being used anymore since we have built our CRUD routes into the api.js file for a cleaner code
app.get("/", (req, res) => res.send("HELLO default"));
app.get("/test", (req, res) => res.send("HELLO WORLD"));
app.get("/testsecond", (req, res) => res.send("HELLO second")); */

//listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
