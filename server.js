"use strict";

const express = require('express');
const router = require("./routing.js");
const app = express();
app.use(express.json());
app.use("/",router);
app.use(express.static("./public"));
const port = 3000;
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));