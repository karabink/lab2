const express = require('express');
const task2 = require('./task.js');

const task2Router = express.Router();

task2Router.get('/', task2.firstOfTask2);

module.exports = task2Router;