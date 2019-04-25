require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const {sequelize} = require('./sequelize');
const passport = require('./passport');

const user = require('./routes/user');
const blacklist = require('./routes/api/blacklist');

const app = express();

//applies rate limit to all requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

//unique name so attackers can't find the framework I am using
app.use(session({
    secret: 'secret',
    name: 'unique',
    resave: true, //forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: true,
    //call myStore.stopExpiringSessions() in tests due to expirations being checked on a timer
    store: new SequelizeStore({
        db: sequelize
    }),
    cookie: {
        httpOnly: true,
        //secure: true, | when https is implemented
        maxAge: 60000*60*24
    }
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', user);
app.use('/blacklist', blacklist);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});