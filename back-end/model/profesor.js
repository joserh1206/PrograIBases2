const mongoose = require('mongoose');

const ProfesorSchema = mongoose.Schema({
	nombre:{
		type: String,
		required: true
	},
    carnetProf:{
        type: Number,
        required: true
    },
    codigoInst:{
        type: Number,
        required: true
    },
    //codigoEsc:{type: Number, required: true},
    password:{
        type: String,
        required: true
    }
});

const item = module.exports = mongoose.model('profesor', ProfesorSchema);
