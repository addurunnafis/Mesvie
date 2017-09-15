const db = require('./../models');
const config = require('./../config/database');
const shortid = require('shortid');
const request = require('request');

const transaksiController = {};

transaksiController.purchase = (req, res) => {
    const userId = req.user._id;
    const purchaseId = 'PURCHASE-'+shortid.generate();
    const { type, quantity, price } = req.body;

    db.User.findById(userId).then((user) => {
        const payment = {
            "transaction_details": {
                "order_id": purchaseId,
                "gross_amount": price
            },
            "customer_details": {
                "first_name": user.fullname,
                "email": user.email,
                "phone": user.phone
            },
        }

        request.post({
            url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + new Buffer('VT-server-_XBnq64HF5vziQrkuZLpYd8p:').toString('base64')
            },
            body: JSON.stringify(payment)
        }, (err, response, body) => {
            res.json(JSON.parse(body));
        });
    }).catch((err) => {
        res.json({
            message: err
        });
    });
}

transaksiController.transaksiAdd = (req, res) => {
    const userId = req.user._id;
    const { order_id, type, quantity, price, paymentType, status } = req.body;

    const transaksi = new db.Transaksi ({
        _id: order_id,
        paymentType,
        status,
        'item.type': type,
        'item.quantity': quantity,
        'item.price': price,
        _creator: userId
    });

    transaksi.save().then((transaksi) => {
        res.json({
            success: true,
            message: 'Transaksi berhasil ditambahkan!'
        });
    }).catch((err) => {
        res.json({
            message: err
        });
    });
}

transaksiController.transaksiAll = (req, res) => {
    const userId = req.user._id;
    
    db.Transaksi.find({ _creator: userId }).then((transaksi) => {
        res.json({
            success: true,
            data: transaksi
        });
    }).catch((err) => {
        res.json({
            message: err
        });
    });
}

transaksiController.test = (req, res) => {
    db.Transaksi.findById("PURCHASE-rJMNcxPOZ").then((ozil) => {
        res.json(ozil);
    })
}

module.exports = transaksiController;