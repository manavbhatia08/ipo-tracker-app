const {getStocks} = require('../controllers/stockController');

const routes= require('express').Router();

routes.get('/stocks', getStocks);

module.exports=routes;