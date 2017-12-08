const dotenv = require('dotenv').config();
const express = require('express');
const port = 3000

app.use(express.static(path.join(__dirname, 'VINTRUV')));
const connectionString = process.env.DATABASE_URL; //Connects to heroku bro


app.listen(process.env.PORT, () => { console.log(`Listening on port: 3000`)});