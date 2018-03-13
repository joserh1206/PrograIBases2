const mongoose = require('mongoose');

const EstudianteSchema = mongoose.Schema({
    nombre:{
		type: String,
		required: true
	},
	carnet:{
		type: Number,
		required: true
	},
    idInst:{
        type: Number, 
        required: true
    },
    idEsc: {
        type: Number, 
        required: true
    },
    idProgA: {
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const item = module.exports = mongoose.model('estudiante', EstudianteSchema);
