const db = require('./../models');
const config = require('./../config/database');
const multer = require('multer');

const userController = {};

userController.profil = (req, res) => {
	const userId = req.user._id;
	const type = req.user.type;

	if(type == "Watcher") {
		db.User.findById(userId).populate({
			path: 'watcher._history',
			select: 'created_at _film _id',
			populate: {
				path: '_film',
				select: 'judul cover harga description _id'
			}
		}).populate({
			path: 'watcher._watchlater',
			select: 'created_at _film _id',
			populate: {
				path: '_film',
				select: 'judul cover harga description _id'
			}
		}).populate({
			path: 'watcher._love',
			select: 'created_at _film _id',
			populate: {
				path: '_film',
				select: 'judul cover harga description _id'
			}
		}).then((user) => {
			res.json({
				success: true,
				data: user
			});
		}).catch((err) => {
			res.json({
				message: err
			});
		});	
	}
	else if(type == "Filmmaker") {
		db.User.findById(userId).populate({
			path: 'filmmaker._daftarfilm',
			select: 'judul cover harga kategori pemain description _id'
		}).then((filmmaker) => {
			res.json({
				success: true,
				data: filmmaker
			});
		}).catch((err) => {
			res.json({
				message: err
			});
		});
	}
	
}

userController.profilUpdate = (req, res) => {
	const userId = req.user._id;
	const { fullname, phone, address, bio, photo } = req.body;

	db.User.findByIdAndUpdate( userId, 
		{ $set: { 
			fullname: fullname,
			phone: phone,
			address: address,
			bio: bio,
			photo: photo
		} }
	).then(() => {
		res.json({
			success: true,
			message: "Update success!"
		});
	}).catch((err) => {
		res.json({
			message: err
		});
	});
}

var photo;
userController.photoUpload = (req, res) => {
    uploadPP(req,res, (err) => {
    	if(err){
             res.json({
             	message:err
             });
             return;
        }
        res.json({
        	success: true,
        	filename: photo
        });
    });
}

const storagePP = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './resource/user/photo');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        photo = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
        cb(null, photo);
    }
});

const uploadPP = multer({
    storage: storagePP
}).single('file');

module.exports = userController;
