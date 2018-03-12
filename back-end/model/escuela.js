const mongoose = require('mongoose');

const EscuelaSchema = mongoose.Schema({
    nombreEscuela:{
		type: String,
		required: true
	},
    codigoEsc:{
        type: Number,
        required: true
    },
    codigoInst:{
        type: Number,
        required: true
    }
});

const item = module.exports = mongoose.model('escuela', EscuelaSchema);
