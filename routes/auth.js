const authController = require('../controllers/authcontroller.js');

module.exports = function() {

    app.get('/docsignup', authController.docsignup);
    app.get('/pharmsignup',authController.pharmsignup)

}
