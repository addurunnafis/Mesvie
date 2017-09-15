const db = require('./../models');
const config = require('./../config/database');

const watcherController = {};

watcherController.tonton = (req, res) => {
    const watcherId = req.user._id;
    const filmId = req.params.id;

    const action = new db.Action({
        type: 'history',
        _creator: watcherId,
        _film: filmId
    });
    
    db.Film.findById(filmId).then((film) => {
        db.User.findById(watcherId).then((watcher) => {
            db.User.findById(film._creator).then((filmmaker) => {
                if(watcher.watcher.coin >= film.harga) {
                    action.save().then((newAction) => {
                        watcher.watcher.coin -= film.harga;
                        watcher.watcher._history.push(newAction._id);
                        filmmaker.filmmaker.coin += film.harga;
                        film.view += 1;
                        watcher.save();
                        filmmaker.save();
                        film.save();
                        res.json({
                            success: true,
                            message: "You succesfully buy the ticket, enjoy the movie..."
                        });
                    })
                }
                else{
                    res.json({
                        message: "You dont have enough coin!!!"
                    });
                }
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

watcherController.watchlater = (req, res) => {
    const userId = req.user._id;
    const { actionId, filmId } = req.body;
    
    if(!actionId) {
        const action = new db.Action({
            type: 'watchlater',
            _creator: userId,
            _film: filmId
        });

        action.save().then((newAction) => {
            db.User.findById(newAction._creator).then((user) => {
                db.Film.findById(newAction._film).then((film) => {
                    user.watcher._watchlater.push(newAction._id);
                    film._watchlater.push(newAction._id);
                    user.save();
                    film.save();
                    res.json({
                        success: true,
                        message: "Added to your watch later list!!!"
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
    else {
        db.Action.findById(actionId).then((action) => {
            db.User.findById(action._creator).then((user) => {
                db.Film.findById(action._film).then((film) => {
                    let index1 = user.watcher._watchlater.indexOf(action._id);
                    let index2 = film._watchlater.indexOf(action._id);
                    user.watcher._watchlater.splice(index1, 1);
                    film._watchlater.splice(index2, 1);
                    user.save();
                    film.save();action.remove();
                    res.json({
                        success: true,
                        message: "Have been deleted from your list!!!"
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
}

watcherController.watchlaterCek = (req, res) => {
    const userId = req.user._id;
    const filmId = req.params.id;

    db.Action.findOne({ type: 'watchlater', _creator: userId, _film: filmId }).then((action) => {
        if(action) {
            res.json({
                success: true,
                data: { id: action._id, cek: true }
            });
        }
        else {
            res.json({
                success: true,
                data: { id: '', cek: false }
            });
        }
    }).catch((err) => {
        res.json({
            message: err
        });
    });
}

watcherController.love = (req, res) => {
    const userId = req.user._id;
    const { actionId, filmId } = req.body;
    
    if(!actionId) {
        const action = new db.Action({
            type: 'love',
            _creator: userId,
            _film: filmId
        });

        action.save().then((newAction) => {
            db.User.findById(newAction._creator).then((user) => {
                db.Film.findById(newAction._film).then((film) => {
                    user.watcher._love.push(newAction._id);
                    film._love.push(newAction._id);
                    user.save();
                    film.save();
                    console.log('mesut');
                    res.json({
                        success: true,
                        message: "Added to your love list!!!"
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
    else {
        db.Action.findById(actionId).then((action) => {
            db.User.findById(action._creator).then((user) => {
                db.Film.findById(action._film).then((film) => {
                    let index1 = user.watcher._love.indexOf(action._id);
                    let index2 = film._love.indexOf(action._id);
                    user.watcher._love.splice(index1, 1);
                    film._love.splice(index2, 1);
                    user.save();
                    film.save();
                    action.remove();
                    res.json({
                        success: true,
                        message: "Have been deleted from your list!!!"
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
}

watcherController.loveCek = (req, res) => {
    const userId = req.user._id;
    const filmId = req.params.id;

    db.Action.findOne({ type: 'love', _creator: userId, _film: filmId }).then((action) => {
        if(action) {
            res.json({
                success: true,
                data: { id: action._id, cek: true }
            });
        }
        else {
            res.json({
                success: true,
                data: { id: '', cek: false }
            });
        }
    }).catch((err) => {
        res.json({
            message: err
        });
    });
}

watcherController.review = (req, res) => {
    const userId = req.user._id;
    const { text, filmId } = req.body;
    
    const review = new db.Review({
        text,
        _creator: userId,
        _film: filmId
    });

    review.save().then((newReview) => {
        db.User.findById(userId).then((user) => {
            db.Film.findById(filmId).then((film) => {
                user.watcher._review.push(newReview._id);
                film._review.push(newReview._id);
                user.save();
                film.save();
                res.json({
                    success: true,
                    message: "Posted"
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

module.exports = watcherController;