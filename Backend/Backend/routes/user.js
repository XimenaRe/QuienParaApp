const express = require('express');
const connection = require('../connection');
const router = express.Router();


const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();


var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

// Function to register a new user in the fb, returning a response with the corresponding status type
router.post('/signup', (req, res) => {
    let user = req.body;

    query = "SELECT user_email,user_password,userRole_idRol,user_status FROM user WHERE user_email=?"
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                query = "INSERT INTO user(user_firstName,user_lastName,user_email,user_password,user_status,userRole_idRol) VALUES (?,?,?,?,'false',?)"
                connection.query(query, [user.name, user.apellido, user.email, user.password, user.rol], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "Registro exitoso!" });
                    } else {
                        ñ
                        return res.status(400).json(err)
                    }
                })
            }
            else {
                return res.status(400).json({ message: "El correo ya existe!" })
            }
        }
    });
});

// Function to log into the db, returning a response with the corresponding status type
router.post('/login', (req, res) => {
    const user = req.body;
    query = "SELECT user_email,user_password,userRole_idRol,user_status FROM user WHERE user_email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0 || results[0].user_password != user.password) {
                return res.status(401).json({ message: 'Usuario o contraseña incorrecta!' });
            }
            else if (results[0].status === false) {
                return res.status(401).json({ message: 'Falta permisos del administrador!' })
            }
            else if (results[0].userRole_idRol != 1) {

                if (results[0].userRole_idRol != user.user_rol) {
                    return res.status(401).json({ message: 'Se ha seleccionado un rol incorrecto. Por favor, elija el rol con el que se registró.' })
                } else if (results[0].user_password == user.password) {
                    const response = { email: results[0].user_email, role: results[0].userRole_idRol }
                    const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' })
                    res.status(200).json({ token: accessToken })
                } else {
                    return res.status(400).json({ message: 'La contraseña no coincide' });

                }
            }
            else if (results[0].user_password == user.password) {
                const response = { email: results[0].user_email, role: results[0].userRole_idRol }
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' })
                res.status(200).json({ token: accessToken })

            }
            else {
                return res.status(400).json({ message: 'Algo fue mal, por favor intenta despues' });
            }
        }
        else {
            return res.status(500).json(err);
        }
    });
});


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

router.post('/forgotPassword', (req, res) => {
    const user = req.body;

    query = "SELECT user_email, user_password FROM user WHERE user_email=?";
    connection.query(query, [user.email], (err, results) => {
        // console.log('Results:', results + 'err:' + err);
        if (!err) {
            if (results.length <= 0) {
                return res.status(200).json({ message: "Contraseña enviada al correo eletronico: " + user.email });
            }
            else {
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: results[0].user_email,
                    subject: 'Contraseña enviada por Quien Para App',
                    html: '<p><b>Tus detalles de tu cuenta de Quien-Para-App:</b><br><b>Email:  </b>' + results[0].user_email + '<br><b>Contraseña: </b>' + results[0].user_password + '<br><a href="http://localhost:4200/">Click para ingresar a la app</a></p>'
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error)
                    }
                    else {
                        console.log('Email sent' + info.response);
                    }
                });
                return res.status(200).json({ message: "La contraseña se ha enviado al correo eletronico." })
            }
        } else {
            return res.status(500).json(err);
        }
    });
});

router.get('/get', auth.authenticateToken, (req, res, next) => {
    var query = "SELECT * FROM user WHERE user_email = ?";
    connection.query(query, [res.locals.email], (err, results) => {
        // console.log('Result Peticion:', results);

        if (!err) {
            return res.status(200).json(results);
        } else {
            return res.status(500).json(err)
        }
    });
});

router.get('/checkToken', auth.authenticateToken, (req, res) => {
    return res.status(200).json({ message: "true" })
});

module.exports = router;