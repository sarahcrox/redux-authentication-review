require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      authCtrl = require('./controllers/authCtrl'),
      ctrl = require('./controllers/mainCtrl'),
      //add env port here
      path = require('path');

const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    //add secret here
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

app.listen(3333, () => console.log(`Server is listening on 3333`))