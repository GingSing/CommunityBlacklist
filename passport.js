const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const User = Sequelize.User;

passport.use(new LocalStrategy(
    {usernameField: 'email'},
    async (email, password, done) => {
        console.log("Logging in.");
        const user = await User.findOne({
            where: {
                email
            }
        });
        //decrypts and compares password
        if(bcrypt.compare(password, user.password)){
            return done(null, user);
        }
    }
));

//tells passport to serialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

module.exports=passport;