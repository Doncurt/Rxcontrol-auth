const express = require('express');
const app = express();
const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const env = require('dotenv').load();

//MIDDLEWARE
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
// For Passport

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions
//ROUTES


//Models
var models = require("./app/models");
//passport stretgy
require('./app/config/passport/passportdoc.js')(passport, models.user);
//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});
//Routes
//Routes
const authRoute = require('./app/routes/auth.js')(app);
// //pharmacy sign up route
// app.get('/pharmsignup', function(req, res) {
//
//     res.render('pharmsignup');
//
// });
// //doct signup route
// app.get('/docsignup', function(req, res) {
//
//     res.render('docsignup');
//
// });
app.get('/login', function(req, res) {

    res.render('login');

});

app.get('/', function(req, res) {

    res.send('Welcome to Passport with Sequelize');

});


app.listen(5000, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});
