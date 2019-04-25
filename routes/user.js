const express = require('express');
const router = express.Router();
const passport = require('../passport');
const { User } = require('../sequelize');

router.post('/register', function(req, res) {
    const { name, userName, ebayUserName, password, email } = req.body;
    User.create({name, userName, ebayUserName, email, password })
        .then(user => {return res.json(user);})
        .catch(err => console.log(err));
});

router.post('/login', function(req, res) {
    passport.authenticate('local', ( err, user, info) => {
        req.login(user, (err) => {
            
            console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
            console.log(`req.user: ${JSON.stringify(req.user)}`)
            return res.send("You were authenticated and logged in.\n");
        });
    })(req, res, next);
});

module.exports=router;