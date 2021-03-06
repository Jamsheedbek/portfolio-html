const express = require('express');
const app = express();
const ejs = require('ejs');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('public'));
app.set('view engine', 'ejs');

const Controller = require('./controllers/controller');

app.get('/', Controller.GET);
app.post('/', Controller.POST);

app.listen(PORT, console.log(PORT));
