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



// Users register route
// Access : Public
// url : http://localhost:80/api/users/register

// Inside the check , you have to write what you have written in input field in that name=""
router.post('/register' , 
    // express-validator
    // check empty fields

    [ 
        check('name').not().isEmpty().trim().escape(),
        check('password').not().isEmpty().trim().escape(),
        // check email
        check('email').isEmail().normalizeEmail()
    ] 
    , 
    (req,res) => {
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                "status":false,
                "error":error.array()// For multiple errors

            })
        }else{
            return res.status(200).json({
                "status":true,
                "data":req.body
            })
        }
    }
)

module.exports = router;

