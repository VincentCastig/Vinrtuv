const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const port = 3000

const app = module.exports = express();
app.use(express.static(path.join(__dirname, 'public')));
const connectionString = process.env.DATABASE_URL; //Connects to heroku bro


app.listen(process.env.PORT, () => { console.log(`Listening on port: 3000`)});