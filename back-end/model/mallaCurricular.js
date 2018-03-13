const mongoose = require('mongoose');

const MallaCSchema = mongoose.Schema({
    numeroPlan:{
		type: Number,
		required: true
	},
    anho:{
        type: Number,
        required: true
    },
    idProgA:{
        type: Number,
        required: true
    },
    materias:{
        type: [String],
        required: true
    }
});

const item = module.exports = mongoose.model('mallaC', MallaCSchema);
