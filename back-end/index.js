var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const route = require('./route/routes');

mongoose.connect('mongodb://localhost:27017/prograibases2');

mongoose.connection.on('connected', ()=>{
	console.log('MongoDB conectado en puerto 27017');
});

mongoose.connection.on('error', (err)=>{
	console.log(err);
});

const PORT = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

app.get('/',(req, res)=>{
	res.send('foobar');
});

app.listen(PORT, ()=>{
	console.log('Servidor iniciado en puerto ' + PORT);
});