const usersController = {
    login: (req, res) => {
      res.render('login');
    },
    signup: (req, res) => {
      res.render('signup');
    },
    enter: (req, res) => {
      res.render('userPanel2');
    }
};
module.exports = usersController;