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

//Models
var models = require("./app/models");
//ROUTES


app.get('/', function(req, res) {

    res.send('Welcome to Passport with Sequelize');

});
const authRoute = require('./app/routes/auth.js')(app,passport);

//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});


app.listen(5000, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});
