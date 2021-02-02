// Including Libraries
const router = require('express').Router();
const bcrypt = require('bcryptjs');// For hashing password
// In Hashing U cannot convert the hashed string to original string
// And that is the difference between Hashing and Encryption Decryption
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
// method : GET 
router.get('/' , (req,res) => {
    return res.status(200).json({
        "status":true,
        "message":"User Default Route ."
    });

})



// Users register route
// Access : Public
// url : http://localhost:80/api/users/register
// method : POST
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

            // Use genSaltSync and not genSalt as it is Asynchronous so till it salts or creates a hashed Password the code below it might execute in that case
            const salt = bcrypt.genSaltSync(10);// 10 => length of salted string

            const hashedPassword = bcrypt.hashSync(req.body.password , salt);

            return res.status(200).json({
                "status":true,
                "data":req.body,
                "hashedPassword":hashedPassword
            })
        }
    }
)

module.exports = router;

