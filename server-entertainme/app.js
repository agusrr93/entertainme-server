const express = require("express")
const app = express()
const cors = require('cors')
const routes = require('./routes')
const mongoose = require("mongoose");
require("dotenv").config();

const port = 3000

mongoose.connect(process.env.MONGO_LOCAL, { useNewUrlParser : false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo connected");
});

app.use(cors());
app.use(express.urlencoded({extended : false}));
app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
  console.log('Listening on port ', port)
})