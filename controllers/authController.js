const db = require('./../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./../config/database');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const options = {
  auth: {
    api_user: 'mesutnafis',
    api_key: 'ozilozil123'
  }
}
const client = nodemailer.createTransport(sgTransport(options));

const authController = {};

authController.register = (req, res) => {
	const { email, username, password, type } = req.body;
	
	const user = new db.User({
		email,
		username,
		password,
		type
	});

	user.active = true;
	if(type == 'Watcher')
		user.filmmaker = false;
	else
		user.watcher = false;
	user.temporarytoken = false;

	bcrypt.genSalt(10).then((salt) => {
		bcrypt.hash(user.password, salt).then((hash) => {
	     	user.password = hash;
	     	user.save().then((newUser) => {
				var email = {
				  from: 'Mesut Ozil Developer, mesutozil@developer.com',
				  to: newUser.email,
				  subject: 'Mesvie Activation Link',
				  text: 'Hy, ' + newUser.username + ', Thank you for registering at Mesvie.com. Please click on the link below to complete your activation: http://localhost:4200/activate/' + newUser.temporarytoken,
				  html: '<p>Hy, <strong>' + newUser.username + '</strong>,</p><p>Thank you for registering at Mesvie.com. Please click on the link below to complete your activation<br><br><a href="http://localhost:4200/activate/' + newUser.temporarytoken + '">Mesvie.com/activate</a></p>'
				};

				client.sendMail(email, (err, info) => {
				    if (err){
				      console.log(err);
				    }
				});
				res.json({
					success: true,
					message: "Account registered! Please check your e-mail for activation link."
				});
			}).catch((err) => {
				res.json({
					message: err
				});
			});
	    }).catch((err) => {
			res.json({
				message: err
			});
		});
	}).catch((err) => {
		res.json({
			message: err
		});
	});
}

authController.activate = (req, res) => {
	const token = req.params.token;

	db.User.findOne({ temporarytoken: token }).then((user) => {
		if(!user) {
			res.json({
				message: "Activation link has expired"
			});
		}
		else {
			user.temporarytoken = false;
			user.active = true;
			user.save().then(() => {
				var email = {
				  from: 'Mesut Ozil Developer, mesutozil@developer.com',
				  to: user.email,
				  subject: 'Mesvie Activation Link',
				  text: 'Hy, ' + user.username + ', Your account has been succesfully activated!',
				  html: '<p>Hy, <strong>' + user.username + '</strong>,</p><p>Your account has been succesfully activated!</p>'
				};

				client.sendMail(email, (err, info) => {
				    if (err ){
				      console.log(err);
				    }
				});

				res.json({
					success: true,
					message: "Account activated!!!"
				});
			}).catch((err) => {
				res.json({
					message: err
				});
			});
		}

	}).catch((err) => {
		res.json({
			message: err
		});
	});
}

authController.login = (req, res) => {
	const { email, password } = req.body;

	db.User.findOne({email: email}).then((user) => {
		if(!user) {
			res.json({
				message: "Account is not found!"
			});
		}
		else {
			if(!user.active){
				res.json({
					message: "Account is not yet activated! Please check your email!"
				});
			}
			else {
				bcrypt.compare(password, user.password).then((isMatch) => {
					if(isMatch){
						const token = jwt.sign(user, config.secret, { expiresIn: 604800 });

						res.json({
							success: true,
							message: "You are now log in",
							token: 'JWT '+token,
							data: {
								_id: user._id,
								type: user.type
							}
						});
					} else {
						res.json({
							message: 'Wrong Password'
						});
					}
			  	}).catch((err) => {
					res.json({
						message: err
					});
				});
			}
		}
	}).catch((err) => {
		res.json({
			message: err
		});
	});
}

module.exports = authController;