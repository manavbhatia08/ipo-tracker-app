const routes= require('express').Router();
const axios=require('axios');
const {getIPOs}= require('../controllers/ipoController.js')

routes.get('/ipos', getIPOs);

module.exports=routes;



