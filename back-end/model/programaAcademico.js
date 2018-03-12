const mongoose = require('mongoose');

const ProgramaASchema = mongoose.Schema({
    nombreProgA:{
		type: String,
		required: true
	},
    codigo:{
        type: Number,
        required: true
    },
    codigoEsc:{
        type: Number,
        required: true
    }
});

const item = module.exports = mongoose.model('programaA', ProgramaASchema);
