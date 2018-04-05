const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profesor = new Schema({
	_id: Number,
	profesor:String,
    carnet:Number,
    codigoInst:Number,
    codigoEsc:Number,
    password:String
});

const item = module.exports = mongoose.model('profesores', profesor);
