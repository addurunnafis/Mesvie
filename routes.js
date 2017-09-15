const express = require('express');
const passport = require('passport');
const controller = require('./controllers');

const routes = express();

// Passport
routes.use(passport.initialize());
routes.use(passport.session());
require('./config/passport')(passport);

// Auth Routes
routes.post('/register', controller.authController.register);
routes.put('/activate/:token', controller.authController.activate);
routes.post('/login', controller.authController.login);

const auth = passport.authenticate('jwt', {session: false});

// User Routes
routes.get('/profil', auth, controller.userController.profil);
routes.post('/profil-update', auth, controller.userController.profilUpdate);
routes.post('/photo-upload', auth, controller.userController.photoUpload);

// Watcher Routes
routes.get('/tonton/:id', auth, controller.watcherController.tonton);
routes.post('/watchlater', auth, controller.watcherController.watchlater);
routes.get('/watchlater-cek/:id', auth, controller.watcherController.watchlaterCek);
routes.post('/love', auth, controller.watcherController.love);
routes.get('/love-cek/:id', auth, controller.watcherController.loveCek);
routes.post('/review', auth, controller.watcherController.review);

// Filmmaker Routes
routes.post('/film-add', auth, controller.filmmakerController.filmAdd);
routes.post('/film-update', auth, controller.filmmakerController.filmUpdate);
routes.post('/video-upload', auth, controller.filmmakerController.videoUpload);
routes.post('/cover-upload', auth, controller.filmmakerController.coverUpload);

// Film Routes
routes.get('/film-all', auth, controller.filmController.filmAll);
routes.get('/film-detail/:id', auth, controller.filmController.filmDetail);

// Transaksi Routes
routes.post('/purchase', auth, controller.transaksiController.purchase);
routes.post('/transaksi-add', auth, controller.transaksiController.transaksiAdd);
routes.get('/transaksi-all', auth, controller.transaksiController.transaksiAll);
routes.get('/test', controller.transaksiController.test);

module.exports = routes;