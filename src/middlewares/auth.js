function auth(req,res,next){
    if(typeof(req.session.user) != "undefined"){
        return next();
    }else{
        return res.redirect('/?login=error');
    }
};

module.exports = auth;