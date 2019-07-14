"use strict";

const express = require('express'); // imports the express module
const router = require("./routing.js"); // imports router from my routing.js file
const app = express(); // creates an express application
app.use(express.json());  // tells the api to serve up data in json
app.use("/", router); // indicates what symbol to route with?
app.use(express.static("./public")); // serves static files from this directory
// const port = 3000; // sets port #
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));
// tells server to listen @ specific port # & makes a link in console