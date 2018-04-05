var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var institucion = new Schema({
    _id:Number,
    institucion:String,
    pais:String,
    sede:String
});

const item = module.exports = mongoose.model('instituciones', institucion);

