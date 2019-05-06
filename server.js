const express = require("express");
const bodyParser = require("body-parser");

//set up express app
const app = express();

app.use(bodyParser.json());

//initialize routes
app.use("/api", require("./routes/api"));

/* below routes are not being used anymore since we have built our CRUD routes into the api.js file for a cleaner code
app.get("/", (req, res) => res.send("HELLO default"));
app.get("/test", (req, res) => res.send("HELLO WORLD"));
app.get("/testsecond", (req, res) => res.send("HELLO second")); */

//listen for requests
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
