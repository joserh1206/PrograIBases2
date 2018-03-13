const mongoose = require('mongoose');

const EscuelaSchema = mongoose.Schema({
    nombreEscuela:{
		type: String,
		required: true
	},
    idInst:{
        type: Number,
        required: true
    }
});

const item = module.exports = mongoose.model('escuela', EscuelaSchema);
