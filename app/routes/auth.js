const authController = require('../controllers/authcontroller.js');
const model = require('../models/');
const Provider = require('../models/provider.js')
const Pharmacy = require('../models/pharmacy.js')
//using axios to validate the inputs from req.body.
var axios = require('axios');
module.exports = function(app) {
  app.get('/login', function(req, res) {

      res.render('login');

  });
    app.get('/docsignup', authController.docsignup);
    app.get('/pharmsignup',authController.pharmsignup);

    app.post('/docsignup',function(req,res){

      model.Provider.create(req.body).then(provider => {
              res.redirect('/dashboard');
            }).catch(function(err) {
                console.log(err)
                res.redirect('/docsignup')
                });
              });

app.post('/pharmsignup', function(req,res){

  model.Pharmacy.create(req.body).then(pharmacy  => {
          res.redirect('/dashboard');
        }).catch(function(err) {
            console.log(err)
            res.redirect('/pharmsignup')
            });
          });


    app.post('/doclogin',function(req, res) => {
        let email = req.body.email,
        let password = req.body.password;
        Provider.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {

                res.redirect('/login');
            } else if (!user.validPassword(password)) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/dashboard');
            }
        });

}
