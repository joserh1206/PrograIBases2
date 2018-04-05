const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programa = new Schema({
    _id:Number,
    programaA:String,
    codigoEsc:Number
});

const item = module.exports = mongoose.model('programas', programa);
