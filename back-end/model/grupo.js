const mongoose = require('mongoose');

const GrupoSchema = mongoose.Schema({
    numGrupo:{
		type: Number,
		required: true
	},
    horario:{
        type: String,
        required: true
    },
    profesor:{
        type: Number,
        required: true
    },
    estudiantes:{
        type: [Number],
        required: true
    }
});

const item = module.exports = mongoose.model('grupo', GrupoSchema);
