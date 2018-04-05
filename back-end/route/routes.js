var express = require('express');
var router = express.Router();

//----------------------------------------------------------------------------------------
//INSTITUCIONES
//----------------------------------------------------------------------------------------

const institucion = require('../model/instituciones');

router.get('/instituciones', (req, res, next)=>{
	institucion.find((err,insts) =>{
		if(err){
			return next(err);
		}
		else{
			res.json(insts);
		}
	});
});

router.post('/institucion', (req, res, next)=>{
	let newInstitucion = new institucion({
		_id: req.body._id,
		institucion: req.body.institucion,
        pais: req.body.pais,
        sede: req.body.sede
	});
	newInstitucion.save((err, result)=>{
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Institución agregada'});
		}
	});
});

router.put('/institucion/:id', (req, res, next)=>{
	institucion.findOneAndUpdate({_id: req.params.id},{
		$set:{
            institucion: req.body.institucion,
            pais: req.body.pais,
            sede: req.body.sede
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de institución actualizados'});
		}
	})
});

router.delete('/institucion/:id', (req, res, next)=>{
	institucion.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Institución eliminada'});
		}
	})
});

//----------------------------------------------------------------------------------------
//ESCUELAS
//----------------------------------------------------------------------------------------

const escuela = require('../model/escuelas');

router.get('/escuelas', (req, res, next)=>{
	escuela.find(function(err, escs){
		if(err){
			return next(err);
		}
		else{
			res.json(escs);
		}
	});
});

router.post('/escuela', (req, res, next)=>{
	let newEscuela = new escuela({
		_id: req.body._id,
		escuela: req.body.escuela,
		codigoInst: req.body.codigoInst
	});
	newEscuela.save((err, result)=>{
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Escuela agregada'});
		}
	})
});

router.put('/escuela/:id', (req, res, next)=>{
	escuela.findOneAndUpdate({_id: req.params.id},{
		$set:{
			escuela: req.body.escuela,
			codigoInst: req.body.codigoInst
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de escuela actualizados'});
		}
	})
});

router.delete('/escuela/:id', (req, res, next)=>{
	escuela.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Escuela eliminada'});
		}
	})
});

//----------------------------------------------------------------------------------------
//PROGRAMAS ACADÉMICOS
//----------------------------------------------------------------------------------------

const programa = require('../model/programas');

router.get('/programas', (req, res, next)=>{
	programa.find(function(err, progs){
		if(err){
			return next(err);
		}
		else{
			res.json(progs);
		}
	});
});

router.post('/programa', (req, res, next)=>{
	let newPrograma = new programa({
		_id: req.body._id,
		programaA: req.body.programaA,
		codigoEsc: req.body.codigoEsc
	});
	newPrograma.save((err, result)=>{
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Programa académico agregado'});
		}
	})
});

router.put('/programa/:id', (req, res, next)=>{
	programa.findOneAndUpdate({_id: req.params.id},{
		$set:{
			programaA: req.body.programaA,
			codigoEsc: req.body.codigoEsc
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de programa académico actualizados'});
		}
	})
});

router.delete('/programaA/:id', (req, res, next)=>{
	programa.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Programa académico eliminado'});
		}
	})
});

//----------------------------------------------------------------------------------------
//MALLAS CURRICULARES
//----------------------------------------------------------------------------------------

const malla = require('../model/mallas');

router.get('/mallas', (req, res, next)=>{
	malla.find(function(err, mallas){
		if(err){
			return next(err);
		}
		else{
			res.json(mallas);
		}
	});
});

router.post('/malla', (req, res, next)=>{
	let newMalla = new malla({
		_id: req.body._id,
        materias: req.body.materias,
		numeroPlan: req.body.numeroPlan,
        anho: req.body.anho,
		codigoProgr: req.body.codigoProgr
	});
	newMalla.save((err, result)=>{
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Malla curricular agregada'});
		}
	})
});

router.put('/malla/:id', (req, res, next)=>{
	malla.findOneAndUpdate({_id: req.params.id},{
		$set:{
			materias: req.body.materias,
			numeroPlan: req.body.numeroPlan,
			anho: req.body.anho,
			codigoProgr: req.body.codigoProgr
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de malla curricular actualizados'});
		}
	})
});

router.delete('/malla/:id', (req, res, next)=>{
	malla.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Malla curricular eliminada'});
		}
	})
});

//----------------------------------------------------------------------------------------
//MATERIAS
//----------------------------------------------------------------------------------------

const materia = require('../model/materias');

router.get('/materias', (req, res, next)=>{
	materia.find(function(err, mats){
		if(err){
			return next(err);
		}
		else{
			res.json(mats);
		}
	});
});

router.post('/materia', (req, res, next)=>{
	let newMateria = new materia({
		_id: req.body._id,
		materia: req.body.materia,
        codigo: req.body.codigo,
		idEsc: req.body.idEsc
	});
	newMateria.save((err, result)=>{
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Materia agregada'});
		}
	})
});

router.put('/materia/:id', (req, res, next)=>{
	materia.findOneAndUpdate({_id: req.params.id},{
		$set:{
			materia: req.body.materia,
			codigo: req.body.codigo,
			idEsc: req.body.idEsc
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de materia actualizados'});
		}
	})
});

router.delete('/materia/:id', (req, res, next)=>{
	materia.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Materia eliminada'});
		}
	})
});

//----------------------------------------------------------------------------------------
//CURSOS
//----------------------------------------------------------------------------------------

const curso = require('../model/cursos');

router.get('/cursos', (req, res, next)=>{
	curso.find(function(err, cursos){
		if(err){
			return next(err);
		}
		else{
			res.json(cursos);
		}
	});
});

router.post('/curso', (req, res, next)=>{
	let newCurso = new curso({
		_id: req.body._id,
		semestre: req.body.semestre,
        anho: req.body.anho,
		codigoMateria: req.body.codigoMateria,
        grupos: req.body.grupos
    });
	newCurso.save((err, result)=>{
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Curso agregado'});
		}
	})
});

router.put('/curso/:id', (req, res, next)=>{
	curso.findOneAndUpdate({_id: req.params.id},{
		$set:{
			semestre: req.body.semestre,
			anho: req.body.anho,
			codigoMateria: req.body.codigoMateria,
			grupos: req.body.grupos
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de curso actualizados'});
		}
	})
});

router.delete('/curso/:id', (req, res, next)=>{
	curso.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Curso eliminado'});
		}
	})
});


//----------------------------------------------------------------------------------------
//GRUPOS
//----------------------------------------------------------------------------------------

const grupo = require('../model/grupos');

router.get('/grupos', (req, res, next)=>{
	grupo.find(function(err, grupos){
		if(err){
			return next(err);
		}
		else{
			res.json(grupos);
		}
	});
});

router.post('/grupo', (req, res, next)=>{
	let newGrupo = new grupo({
		_id: req.body._id,
		numeroGrupo: req.body.numeroGrupo,
		codigoProfe: req.body.codigoProfe,
        horario: req.body.horario,
        estudiantes: req.body.estudiantes,
		idCurso: req.body.idCurso
    });
	newGrupo.save((err, result)=>{
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Grupo agregado'});
		}
	})
});

router.put('/grupo/:id', (req, res, next)=>{
	grupo.findOneAndUpdate({_id: req.params.id},{
		$set:{
			numeroGrupo: req.body.numeroGrupo,
			codigoProfe: req.body.codigoProfe,
			horario: req.body.horario,
			estudiantes: req.body.estudiantes,
			idCurso: req.body.idCurso
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de grupo actualizados'});
		}
	})
});

router.delete('/grupo/:id', (req, res, next)=>{
	grupo.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Grupo eliminado'});
		}
	})
});

//----------------------------------------------------------------------------------------
//ESTUDIANTES
//----------------------------------------------------------------------------------------

const estudiante = require('../model/estudiantes');

router.get('/estudiantes', (req, res, next)=>{
	estudiante.find(function(err, ests){
		if(err){
			return next(err);
		}
		else{
			res.json(ests);
		}
	});
});

router.post('/estudiante', (req, res, next)=>{
	let newEstudiante = new estudiante({
		_id: req.body._id,
		nombre: req.body.nombre,
		carnet: req.body.carnet,
        idInst: req.body.idInst,
        idEsc: req.body.idEsc,
        idProgA: req.body.idProgA,
		password: req.body.password
	});
	newEstudiante.save((err, result)=>{
		if(err){
			return next(err);
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
            idInst: req.body.idInst,
            idEsc: req.body.idEsc,
            idProgA: req.body.idProgA,
            password: req.body.password
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de estudiante actualizados'});
		}
	})
});

router.delete('/estudiante/:id', (req, res, next)=>{
	estudiante.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Estudiante eliminado'});
		}
	})
});

//----------------------------------------------------------------------------------------
//PROFESORES
//----------------------------------------------------------------------------------------

const profesor = require('../model/profesores');

router.get('/profesores', (req, res, next)=>{
	profesor.find(function(err, profs){
		if(err){
			return next(err);
		}
		else{
			res.json(profs);
		}
	});
});

router.post('/profesor', (req, res, next)=>{
	let newProfesor = new profesor({
		_id: req.body._id,
		profesor: req.body.profesor,
        carnet: req.body.carnet,
        codigoInst: req.body.codigoInst,
        codigoEsc: req.body.codigoEsc,
		password: req.body.password
	});
	newProfesor.save((err, result)=>{
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Profesor agregado'});
		}
	})
});

router.put('/profesor/:id', (req, res, next)=>{
	profesor.findOneAndUpdate({_id: req.params.id},{
		$set:{
			profesor: req.body.profesor,
			carnet: req.body.carnet,
			codigoInst: req.body.codigoInst,
			codigoEsc: req.body.codigoEsc,
			password: req.body.password
		}
	},
	function(err, result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Datos de profesor actualizados'});
		}
	})
});

router.delete('/profesor/:id', (req, res, next)=>{
	profesor.remove({_id: req.params.id}, function(err,result){
		if(err){
			return next(err);
		}
		else{
			res.json({msg: 'Profesor eliminado'});
		}
	})
});

module.exports = router;

