const mongoose = require('mongoose');

const InstitucionSchema = mongoose.Schema({
    nombreInst:{
		type: String,
		required: true
	},
    pais:{
        type: String,
        required: true
    },
    sede:{
        type: String,
        required: true
    }
});

const item = module.exports = mongoose.model('institucion', InstitucionSchema);
