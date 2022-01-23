const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('public'));
app.set('view engine', 'ejs');

const Controller = require('./controllers/controller');

app.get('/jamshidbekJS', Controller.GET);
app.post('/jamshidbekJS', Controller.POST);

app.listen(5000, console.log(5000));
