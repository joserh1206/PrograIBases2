var express = require('express');
var router = express.Router();

//----------------------------------------------------------------------------------------
//INSTITUCIONES
//----------------------------------------------------------------------------------------

const institucion = require('../model/institucion');

router.get('/instituciones', (req, res, next)=>{
	institucion.find(function(err, insts){
		if(err){
			res.json(err);
		}
		else{
			res.json(insts);
		}
	});
});

router.post('/institucion', (req, res, next)=>{
	let newInstitucion = new institucion({
		nombreInst: req.body.nombreInst,
		codigo: req.body.codigo,
        pais: req.body.pais,
        sede: req.body.sede
	});
	newInstitucion.save((err, result)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Institución agregada'});
		}
	})
});

router.put('/institucion/:id', (req, res, next)=>{
	institucion.findOneAndUpdate({_id: req.params.id},{
		$set:{
            nombreInst: req.body.nombreInst,
            codigo: req.body.codigo,
            pais: req.body.pais,
            sede: req.body.sede
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Datos de institución actualizados'});
		}
	})
});

router.delete('/institucion/:id', (req, res, next)=>{
	institucion.remove({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Institución eliminada'});
		}
	})
});


//----------------------------------------------------------------------------------------
//ESCUELAS
//----------------------------------------------------------------------------------------

const escuela = require('../model/escuela');

router.get('/escuelas', (req, res, next)=>{
	escuela.find(function(err, escs){
		if(err){
			res.json(err);
		}
		else{
			res.json(escs);
		}
	});
});

router.post('/escuela', (req, res, next)=>{
	let newEscuela = new escuela({
		nombreEscuela: req.body.nombreEscuela,
        codigoEsc: req.body.codigoEsc,
		codigoInst: req.body.codigoInst
	});
	newEscuela.save((err, result)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Escuela agregada'});
		}
	})
});

router.put('/escuela/:id', (req, res, next)=>{
	escuela.findOneAndUpdate({_id: req.params.id},{
		$set:{
            nombreEscuela: req.body.nombreEscuela,
            codigoEsc: req.body.codigoEsc,
            codigoInst: req.body.codigoInst
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Datos de escuela actualizados'});
		}
	})
});

router.delete('/escuela/:id', (req, res, next)=>{
	escuela.remove({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Escuela eliminada'});
		}
	})
});


//----------------------------------------------------------------------------------------
//PROGRAMAS ACADÉMICOS
//----------------------------------------------------------------------------------------

const programaA = require('../model/programaAcademico');

router.get('/programasA', (req, res, next)=>{
	programaA.find(function(err, progs){
		if(err){
			res.json(err);
		}
		else{
			res.json(progs);
		}
	});
});

router.post('/programaA', (req, res, next)=>{
	let newProgramaA = new programaA({
		nombreProgA: req.body.nombreProgA,
        codigo: req.body.codigo,
		codigoEsc: req.body.codigoEsc
	});
	newProgramaA.save((err, result)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Programa académico agregado'});
		}
	})
});

router.put('/programaA/:id', (req, res, next)=>{
	programaA.findOneAndUpdate({_id: req.params.id},{
		$set:{
            nombreProgA: req.body.nombreProgA,
            codigo: req.body.codigo,
            codigoEsc: req.body.codigoEsc
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Datos de programa académico actualizados'});
		}
	})
});

router.delete('/programaA/:id', (req, res, next)=>{
	programaA.remove({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Programa académico eliminado'});
		}
	})
});




//----------------------------------------------------------------------------------------
//MALLAS CURRICULARES
//----------------------------------------------------------------------------------------

const mallaC = require('../model/mallaCurricular');

router.get('/mallasC', (req, res, next)=>{
	mallaC.find(function(err, mallas){
		if(err){
			res.json(err);
		}
		else{
			res.json(mallas);
		}
	});
});

router.post('/mallaC', (req, res, next)=>{
	let newMallaC = new mallaC({
		numeroPlan: req.body.numeroPlan,
        anho: req.body.anho,
		codigoProgA: req.body.codigoProgA,
        materias: req.body.materias
	});
	newMallaC.save((err, result)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Malla curricular agregada'});
		}
	})
});

router.put('/mallaC/:id', (req, res, next)=>{
	mallaC.findOneAndUpdate({_id: req.params.id},{
		$set:{
    		numeroPlan: req.body.numeroPlan,
            anho: req.body.anho,
            codigoProgA: req.body.codigoProgA,
            materias: req.body.materias
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Datos de malla curricular actualizados'});
		}
	})
});

router.delete('/mallaC/:id', (req, res, next)=>{
	mallaC.remove({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Malla curricular eliminada'});
		}
	})
});



//----------------------------------------------------------------------------------------
//MATERIAS
//----------------------------------------------------------------------------------------

const materia = require('../model/materia');

router.get('/materias', (req, res, next)=>{
	materia.find(function(err, mats){
		if(err){
			res.json(err);
		}
		else{
			res.json(mats);
		}
	});
});

router.post('/materia', (req, res, next)=>{
	let newMateria = new materia({
		nombre: req.body.nombre,
        codigo: req.body.codigo,
		codigoEsc: req.body.codigoEsc,
        requisitos: req.body.requisitos,
        corequisitos: req.body.corequisitos
	});
	newMateria.save((err, result)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Materia agregada'});
		}
	})
});

router.put('/materia/:id', (req, res, next)=>{
	materia.findOneAndUpdate({_id: req.params.id},{
		$set:{
            nombre: req.body.nombre,
            codigo: req.body.codigo,
            codigoEsc: req.body.codigoEsc,
            requisitos: req.body.requisitos,
            corequisitos: req.body.corequisitos
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Datos de materia actualizados'});
		}
	})
});

router.delete('/materia/:id', (req, res, next)=>{
	materia.remove({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Materia eliminada'});
		}
	})
});



//----------------------------------------------------------------------------------------
//CURSOS
//----------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------
//GRUPOS
//----------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------
//ESTUDIANTES
//----------------------------------------------------------------------------------------

const estudiante = require('../model/estudiante');

router.get('/estudiantes', (req, res, next)=>{
	estudiante.find(function(err, ests){
		if(err){
			res.json(err);
		}
		else{
			res.json(ests);
		}
	});
});

router.post('/estudiante', (req, res, next)=>{
	let newEstudiante = new estudiante({
		nombre: req.body.nombre,
		carnet: req.body.carnet,
        codigoInst: req.body.codigoInst,
        codigoEsc: req.body.codigoEsc,
        programaA: req.body.programaA,
		//activo: req.body.activo,
        password: req.body.password
	});
	newEstudiante.save((err, result)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Estudiante agregado'});
		}
	})
});

router.put('/estudiante/:id', (req, res, next)=>{
	estudiante.findOneAndUpdate({_id: req.params.id},{
		$set:{
            nombre: req.body.nombre,
            carnet: req.body.carnet,
            codigoInst: req.body.codigoInst,
            codigoEsc: req.body.codigoEsc,
            programaA: req.body.programaA,
            //activo: req.body.activo,
            password: req.body.password
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Datos de estudiante actualizados'});
		}
	})
});

router.delete('/estudiante/:id', (req, res, next)=>{
	estudiante.remove({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Estudiante eliminado'});
		}
	})
});



//----------------------------------------------------------------------------------------
//PROFESORES
//----------------------------------------------------------------------------------------

const profesor = require('../model/profesor');

router.get('/profesores', (req, res, next)=>{
	profesor.find(function(err, profs){
		if(err){
			res.json(err);
		}
		else{
			res.json(profs);
		}
	});
});

router.post('/profesor', (req, res, next)=>{
	let newProfesor = new profesor({
		nombre: req.body.nombre,
        carnetProf: req.body.carnetProf,
        codigoInst: req.body.codigoInst,
        //codigoEsc: req.body.codigoEsc,
		password: req.body.password
	});
	newProfesor.save((err, result)=>{
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Profesor agregado'});
		}
	})
});

router.put('/profesor/:id', (req, res, next)=>{
	profesor.findOneAndUpdate({_id: req.params.id},{
		$set:{
			nombre: req.body.nombre,
            carnetProf: req.body.carnetProf,
            codigoInst: req.body.codigoInst,
            //codigoEsc: req.body.codigoEsc,
            password: req.body.password		
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Datos de profesor actualizados'});
		}
	})
});

router.delete('/profesor/:id', (req, res, next)=>{
	profesor.remove({_id: req.params.id}, function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json({msg: 'Profesor eliminado'});
		}
	})
});



module.exports = router;
