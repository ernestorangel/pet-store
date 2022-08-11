const fs = require('fs');
const path = require('path');
const {User} = require('../database/models')

const cookieLogin = (req,res,next) => {
    if(req.cookies.logado != undefined && req.session.user == null){
        let email = req.cookies.logado;

        let user = User.findOne({
            where:{
                email:email
            }
        })
        if(user.email == email){
            req.session.user = user
        }            
    };
    next();
}
    
module.exports = cookieLogin