const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./../config/database');
const db = require('./../models');

module.exports = function(passport){
	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		db.User.findOne({_id: jwt_payload._doc._id}).then((user) => {
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		}).catch((err) => {
			return done(err, false);
		});
	}));
}