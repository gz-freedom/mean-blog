var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Category = require('../models/Category');

router.post('/', passport.authenticate('jwt', { session: false }), function(req, res) {
    var token = getToken(req.headers);
    if(token) {
        Category.find(function(err, categories) {
            if(err) return next(err);
            res.json(categories);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});