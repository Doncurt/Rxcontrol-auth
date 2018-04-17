const authController = require('../controllers/authcontroller.js');
const model = require('../models/');
const Provider = require('../models/provider.js')
const Pharmacy = require('../models/pharmacy.js')
//using axios to validate the inputs from req.body.
var axios = require('axios');
module.exports = function(app) {

// log in for pharmacist
  app.get('/pharmlogin', function(req, res) {

      res.render('pharmlogin');

  });



//login for  Providers
  app.get('/doclogin', function(req, res) {

      res.render('doclogin');

  });

  //dependencies for  logins
    app.get('/pharmlogin',authController.pharmlogin);
    app.get('/doclogin',authController.doclogin);
    app.get('/docsignup', authController.docsignup);
    app.get('/pharmsignup',authController.pharmsignup);


//SIgn up for doc
    app.post('/docsignup',function(req,res){

      model.Provider.create(req.body).then(provider => {
              res.redirect('/dashboard');
            }).catch(function(err) {
                console.log(err)
                res.redirect('/docsignup')
                });
              });
///sign up for pharmacies bcrypt must be set
app.post('/pharmsignup', function(req,res){
  model.Pharmacy.create(req.body).then(pharmacy  => {
          res.redirect('/dashboard');
        }).catch(function(err) {
            console.log(err)
            res.redirect('/pharmsignup')
            });
          });

// Login for Providers
    app.post('/doclogin',function(req, res) {
        var email = req.body.email,
         password = req.body.password;
        Provider.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {

                res.redirect('/doclogin');
            } else if (!user.validPassword(password)) {
                res.redirect('/doclogin');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/dashboard');
            }
        });
      });

    // Login for Providers
            app.post('/pharmlogin',function(req, res) {
                var email = req.body.email,
                 password = req.body.password;
                Pharmacy.findOne({ where: { username: username } }).then(function (user) {
                    if (!user) {

                        res.redirect('/pharmlogin');
                    } else if (!user.validPassword(password)) {
                        res.redirect('/pharmlogin');
                    } else {
                        req.session.user = user.dataValues;
                        res.redirect('/dashboard');
                    }
                });
              });


}
