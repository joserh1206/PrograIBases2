const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const escuela = new Schema({
    _id:Number,
    escuela:String,
    codigoInst:Number
});

const item = module.exports = mongoose.model('escuelas', escuela);
