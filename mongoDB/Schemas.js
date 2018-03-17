var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var institucion = new Schema({
    _id:Number,
    institucion:String,
    pais:String,
    sede:String
});
  
var escuela = new Schema({
    _id:Number,
    escuela:String,
    codigoInst:Number
});

var programaAcademico = new Schema({
    _id:Number,
    programaA:String,
    codigoEsc:Number
});

var materia = new Schema({
    _id:Number,
    materia:String,
    requisitos:[Number],
    corequisitos:[Number],
    codigoEsc:Number
});

var profesor = new Schema({
    _id:Number,
    carnet:Number,
    profesor:String,
    codigoEsc:Number,
    password:String
});


var estudiante = new Schema({
    _id:Number,
    estudiante:String,
    carnet:Number,
    activo:Boolean,
    programasA:[Number],
    password:String,
    codigoInst:[Number]
});

var mallaCurricular = new Schema({
    _id:Number,
    materias:[Number],
    numeroPlan:Number,
    anho:Number,
    codigoProgr:Number
});


var grupo = new Schema({
    _id:Number,
    numeroGrupo:Number,
    codigoProfe:Number,
    horario:String,
    estudiantes:[Number]
});

var curso = new Schema({
    _id:Number,
    semestre:Number,
    anho:Number,
    codigoMateria:Number,
    grupos:[Number]
});

/*
Antes de poder insertar se tiene que asegurar que la colección counters existe y están los inserts que se encuentran en sampleData.js

Nombres de las colecciones
1.instituciones
2.escuelas
3.materias
4.profesores
5.estudiantes
6.mallasCurriculares
7.grupos
8.cursos
9.programasAcademicos
*/
