const db = require('./../models');
const config = require('./../config/database');

const filmController = {};

filmController.filmAll = (req, res) => {
    db.Film.find({}).then((films) => {
        res.json({
            success: true,
            data: films
        });
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });
}

filmController.filmDetail = (req, res) => {
    const filmId = req.params.id;
    
    db.Film.findById(filmId).populate({
        path: '_review',
        select: 'text _creator _id',
        populate: {
            path: '_creator',
            select: 'fullname photo -_id'
        }
    }).then((film) => {
        res.json({
            success: true,
            data: film
        });
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });
}

module.exports = filmController;