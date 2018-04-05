const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const curso = new Schema({
    _id:Number,
	semestre:Number,
    anho:Number,
    codigoMateria:Number,
    grupos:[Number]
});

const item = module.exports = mongoose.model('cursos', curso);
