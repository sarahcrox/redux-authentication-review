require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      authCtrl = require('./controllers/authCtrl'),
      ctrl = require('./controllers/mainCtrl'),
      //add env port here
      path = require('path');

const app = express();

app.use(express.json());

app.listen(3333, () => console.log(`Server is listening on 3333`))