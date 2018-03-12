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
    codigoInst:{
        type: Number, 
        required: true
    },
    codigoEsc: {
        type: Number, 
        required: true
    },
    programaA: {
        type: Number,
        required: true
    },
    //activo:{type: Boolean, required: true},
    password:{
        type: String,
        required: true
    }
});

const item = module.exports = mongoose.model('estudiante', EstudianteSchema);
