const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

function auth(req,res,next){
    if(typeof(req.session.user) != "undefined"){
        return next();
    }else{
        return res.redirect('/?login=error');
    }
};

module.exports = auth;