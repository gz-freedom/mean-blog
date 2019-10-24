var JWtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('../models/user');
var settings = require('../config/settings');

module.exports = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = settings.secret;
    passport.use(new JWtStrategy(opts, function(jwt_payload, done) {
        User.findOne({ id: jwt_payload.id }, function(err, user) {
            if(err) {
                return done(err, false);
            }
            if(user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};