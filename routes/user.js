const express = require('express');
const router = express.Router();
const passport = require('../passport');
const { User } = require('../sequelize');
const validator = require('validator');
const { ensureAuthenticated, ensureAdmin } = require('../authentication');

router.post('/register', function(req, res) {
    const { name, userName, ebayUserName, password, email } = req.body;

    //checks if input variables are valid
    if(!validator.isEmail(email) || 
    validator.isEmpty(name) || 
    validator.isEmpty(ebayUserName) || 
    validator.isEmpty(password)) return res.json({error: true});

    User.create({name, userName, ebayUserName, email, password })
        .then(user => {
            req.session.user = user;
            return res.json(user);
        })
        .catch(err => {
            console.log(err); 
            return res.json({error: true});
        });
});

router.post('/login', function(req, res) {
    passport.authenticate('local', ( err, user, info) => {
        req.login(user, (err) => {
            
            req.session.user = user;
            console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
            console.log(`req.user: ${JSON.stringify(req.user)}`)
            return res.json({message:"You have been logged in and authenticated."});
        });
    })(req, res);
});

router.get('/checkSession', ensureAuthenticated, function(req, res) {
    console.log(req.session);
    return res.json({"message":"You are logged in and authenticated.", user: req.session.user});
});

router.patch('/changeName', function(req, res){
    const {newEmail} = req.body;
    console.log(req.body);
});

module.exports=router;