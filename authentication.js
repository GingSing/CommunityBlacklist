const ensureAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    }else{
        return res.status(401).json({error: "401 Error: Not Authenticated."});
    }
};

const ensureAdmin = (req, res, next) => {
    if(req.user && req.user.role == 'ADMIN') {
        return next();
    }else{
        return res.status(401).json({error: "401 Error: Not Admin."});
    }
};

const ensureVerified = (req, res, next) => {
    if(req.user && req.user.verified === true){
        return next();
    }else{
        return res.status(401).json({error: "401 Error: Not Verified."});
    }
};

module.exports = {
    ensureAdmin,
    ensureAuthenticated,
    ensureVerified
}