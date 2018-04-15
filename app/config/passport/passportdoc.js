const bCrypt = require('bcrypt-nodejs');
module.exports = function(passport, provider) {
  const Provider = provider;
  const LocalStrategy = require('passport-local').Strategy;

passport.use('local-signup', new LocalStrategy(

    {
        emailField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback

    },
    function(req, email, password, done) {
      const generateHash = function(password) {

        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

};
Provider.findOne({
    where: {
        email: email
    }
}).then(function(provider) {

    if (provider)

    {

        return done(null, false, {
            message: 'That email is already taken'
        });

    } else

    {

        var providerPassword = generateHash(password);

        var data =

            {
                name:req.body.name,
                email: email,
                password: providerPassword,
                address: req.body.address,
                npi: req.body.npi,
                dea: req.body.dea,
                licenseNumber: req.body.licenseNumber,
                hin: req.body.hin,
                phone:req.body.phone


            };


        Provider.create(data).then(function(newProvider, created) {

            if (!newProvider) {

                return done(null, false);

            }

            if (newProvider) {

                return done(null, newProvider);

            }

        });

    }

});

    }
));
}
