// Include libraries
// require('dotenv').config();   No need to link this as already we are going to connect it in index.js
const mongoose = require('mongoose');
const assert = require('assert');
// Comes inbuilt in nodejs
// Can check a Condition and generate Output accordingly

// const url = process.env.URL;// For Cloud Database
// While using Cloud database ensure that .env file has correct password and dbname
const url = process.env.DB_URL_LOCAL;// For connecting with local database

mongoose.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:true
    },
    (err , link) => {
        // Check database connection error
        assert.strictEqual(err , null , "Database Connection Failed")
        // console.log(err);

        // Database Connection Successful
        console.log("Database Connection Established");
        
    }
);