const express = require('express')
const mongoose = require('mongoose')


var app= express();

var studentApi= require('./studentRoute')

// Set up mongoose connection

// const mongoURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

const mongoURI= 'mongosrv'

mongoose
    .connect(mongoURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => console.log(`databases is connected`));

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use('/students', studentApi)

app.listen('5000', () => {
    console.log("Server is up and running on port number 5000");
});




