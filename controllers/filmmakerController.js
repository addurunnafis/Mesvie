const db = require('./../models');
const config = require('./../config/database');
const multer = require('multer');

const filmmakerController = {};

filmmakerController.filmAdd = (req, res) => {
	const userId = req.user._id;
	const { judul, video, cover, harga, durasi, kategori, pemain, description } = req.body;
    
	const film = new db.Film({ judul, video, cover, harga, durasi, kategori, pemain, description, _creator: userId });

    db.User.findById(userId).then((user) => {
        if(user.filmmaker.token > 0) {
            film.save().then((newFilm) => {
                user.filmmaker.token -= 1;
                user.filmmaker._daftarfilm.push(newFilm._id);
                user.save().then(() => {   
                    res.json({
                        success: true,
                        message: "Film succesfully added!!!"
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
        else{
            res.json({
                message: "You dont have enough token!!!"
            });
        }
    }).catch((err) => {
        res.json({
            message: err
        });
    });
}

filmmakerController.filmUpdate = (req, res) => {
    const { _id, judul, harga, description } = req.body;

    db.Film.findById(_id).then((film) => {
        film.judul = judul;
        film.harga = harga;
        film.description = description;
        film.save().then(() => {
            res.json({
                success: true,
                message: "Update film successfully!"
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

var video;
filmmakerController.videoUpload = (req, res) => {
    uploadVideo(req,res, (err) => {
        if(err){
             res.json({
             	message:err
             });
             return;
        }
        res.json({
        	success: true,
        	filename: video
        });
    });
}

const storageVideo = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './resource/film/video');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        video = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
        cb(null, video);
    }
});

const uploadVideo = multer({
    storage: storageVideo
}).single('file');


var cover;
filmmakerController.coverUpload = (req, res) => {
    uploadCover(req,res, (err) => {
    	if(err){
             res.json({
             	message:err
             });
             return;
        }
        res.json({
        	success: true,
        	filename: cover
        });
    });
}

const storageCover = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './resource/film/cover');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cover = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
        cb(null, cover);
    }
});

const uploadCover = multer({
    storage: storageCover
}).single('file');

module.exports = filmmakerController;