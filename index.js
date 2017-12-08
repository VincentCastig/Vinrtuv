const dotenv = require('dotenv').config();
const port = 3000

const connectionString = process.env.DATABASE_URL; //Connects to heroku bro


app.listen(process.env.PORT, () => { console.log(`Listening on port: 3000`)});