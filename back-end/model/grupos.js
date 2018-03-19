const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grupo = new Schema({
	_id:Number,
    numeroGrupo:Number,
    codigoProfe:Number,
    horario:String,
    estudiantes:[Number],
	idCurso:Number
});

const item = module.exports = mongoose.model('grupos', grupo);
