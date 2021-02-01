// Including Libraries
const router = require('express').Router();
const bcrypt = require('bcryptjs');;
const bodyParser = require('body-parser');
const {check , validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const user = require('./../models/user');
const tokenKey = process.env.TOKEN_KEY;

// middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
 
// Default Route
// Access : Public
// url : http://localhost:80/api/users
router.get('/' , (req,res) => {
    return res.status(200).json({
        "status":true,
        "message":"User Default Route ."
    });

})

module.exports = router;

