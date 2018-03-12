const mongoose = require('mongoose');

const CursoSchema = mongoose.Schema({
    semestre:{
		type: Number,
		required: true
	},
    anho:{
        type: Number,
        required: true
    },
    codigoMateria:{
        type: Number,
        required: true
    },
    grupos:{
        type: [Number],
        required: true
    }
});

const item = module.exports = mongoose.model('curso', CursoSchema);
