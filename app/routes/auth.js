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
    //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    //   axios.get('path/to/hippa/api')
    //       .then(response => {

    //       })
    //       .catch(error => {
    //         alert('Information not found in HIPPA, please verify information or Contact HIPPA');
    //       });

      model.Provider.create(req.body).then(provider => {
              res.redirect('/dashboard');
            }).catch(function(err) {
                console.log(err)
                res.redirect('/docsignup')
                });
              });

app.post('/pharmsignup', function(req,res){
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  // axios.get('path/to/hippa/api')
  //     .then(response => {

  //     })
  //     .catch(error => {
  //       alert('Information not found in HIPPA, please verify information or Contact HIPPA');
  //     });

  model.Pharmacy.create(req.body).then(pharmacy  => {
          res.redirect('/dashboard');
        }).catch(function(err) {
            console.log(err)
            res.redirect('/pharmsignup')
            });
          });
}
