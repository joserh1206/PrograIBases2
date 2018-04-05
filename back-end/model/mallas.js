const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const malla = new Schema({
    _id: Number,
    materias:[String],
	numeroPlan:Number,
    anho:Number,
    codigoProgr:Number
});

const item = module.exports = mongoose.model('mallas', malla);
