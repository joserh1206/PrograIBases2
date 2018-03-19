const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materia = new Schema({
	_id:Number,
    materia:String,
    codigo:String,
    idEsc:Number
});

const item = module.exports = mongoose.model('materias', materia);
