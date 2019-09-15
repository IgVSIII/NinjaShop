const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../../models/User');

module.exports = new LocalStrategy(
    {usernameField: 'email', session: false},
    async function(email, password, done){
        try {

            var user = await User.findOne({email});

            if (!user) {
   
                var user = new User({
                    email: email,
                    password: password,
                });
                             
                await user.setPassword(password);
                await user.save();
                //mongoose.disconnect();
            }
      
            const checkU = await user.checkPassword(password);
      
            if (!checkU) {
              return done(null, false, 'Невереный пароль');
            }

            return done(null, user);

        } catch (err) {
            done(err);
        }
    } 
);