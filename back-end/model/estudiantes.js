const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudiante = new Schema({
	_id: Number,
    nombre:String,
	carnet:Number,
    idInst:Number,
    idEsc:Number,
    idProgA:Number,
    password:String
});

const item = module.exports = mongoose.model('estudiantes', estudiante);
