const express = require('express');
// import express from 'express';
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
//app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const uri = process.env.LOCAL;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
})

//Import Routes
const usersRouter = require('./routes/routeUser');
const adminRouter = require('./routes/routeAdmin')
const postRouter = require('./routes/post');
const categoryRouter = require('./routes/routeCategory');



//Route Middleware
app.use('/category', categoryRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/post', postRouter);
app.use('/uploads', express.static('uploads'))

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
})
