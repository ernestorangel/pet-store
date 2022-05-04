const path = require('path')
const mainController = {
    home: (req, res, next) => {
        res.render('home', {title: "Home"});
    }
}
module.exports = mainController