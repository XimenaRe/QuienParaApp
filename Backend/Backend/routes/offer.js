const express = require('express');
const connection = require('../connection');
const router = express.Router();

var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

// Function to register a new user in the fb, returning a response with the corresponding status type
router.post('/add', auth.authenticateToken, checkRole.checkRole, (req, res) => {
    let offer = req.body;

    var query = "INSERT INTO offer (typeOffer,descriptionOffer,addressOffer,timeOffer,photoOffer,idUser_idOffer) VALUES (?,?,?,?,?,?)";
    connection.query(query, [offer.typeOffer, offer.description, offer.address, offer.time, offer.photo, offer.idUser], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "La oferta se añadio correctamente" })
        } else {
            return res.status(500).json(err);
        }
    });
});

// Function to register a new user in the fb, returning a response with the corresponding status type
router.get('/getOffer/:id', auth.authenticateToken, (req, res, next) => {
    const id = req.params.id;
    query = "SELECT * FROM offer WHERE idUser_idOffer=?";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        } else {
            return res.status(500).json(err);
        }
    })
});


module.exports = router;