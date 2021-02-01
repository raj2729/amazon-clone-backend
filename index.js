// Include libraries
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const database = require('./database');

const app=express();
const port=process.env.PORT;

// User Routes
const userRoutes = require('./routes/users')

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use('/api/users' , userRoutes);


// Routes
app.get('/' , (req,res) => {
    return res.status(200).json({
        "status":true,
        "message":"Amazon Clone Rest API Home Page"
    })

})

// Start Server
app.listen(port , () => {
    console.log(`We are connected at port : ${port}`);
    
})
