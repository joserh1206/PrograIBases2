const mongoose = require('mongoose');

const MateriaSchema = mongoose.Schema({
    nombre:{
		type: String,
		required: true
	},
    codigo:{
        type: String,
        required: true
    },
    idEsc:{
        type: Number,
        required: true
    },
    requisitos:{
        type: [String],
        required: true
    },
    corequisitos:{
        type: [String],
        required: true        
    }
});

const item = module.exports = mongoose.model('materia', MateriaSchema);
