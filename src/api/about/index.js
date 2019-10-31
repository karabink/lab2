const express = require("express");
const aboutRouter = express.Router();

aboutRouter.get('/', function (request, response){
response.send({
author:"Karabin Kate",
group: "SA2",
v: "5",
date: "08.10.2019"
    });
});

module.exports = aboutRouter;