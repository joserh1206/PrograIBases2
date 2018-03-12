//LOS ID PUEDEN especificarse o no, si no se especifican mongo crea sus ID con ObjectID()
//INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT
//INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT - INSERT
//--------------------------------------------------------------------------
db.instituciones.insertOne({
  "_id": int,
  "institucion":String,
  "pais":String,
  "sede":String
})
//--------------------------------------------------------------------------
db.escuelas.insertOne([
{
  "_id":int,
  "escuela":String,
  "codigoInst":int //ID de la institucion
})
//--------------------------------------------------------------------------
db.programasAcademicos.insertOne({
  "_id":int,
  "programaA":String,
  "codigoEsc":int //ID de la escuela
})
//--------------------------------------------------------------------------
db.materias.insertOne([
{
  "_id":int,
  "materia":String,
  "requisitos":[int], //ID de otras materias
  "corequisitos":[int],
  "codigoEsc":int //ID escuela
})
//Añadir requisitos
db.materias.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"requisitos":int}})//ID del requisito que voy a agregar
//Eliminar requisitos  _____________________________________________________________DELETE
db.materias.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'requisitos': int}})//ID del requisito que voy a eliminar

//Añadir corequisitos
db.materias.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"corequisitos":int}})//ID del corequisito que voy a agregar
//Eliminar corequisitos  ___________________________________________________________DELETE
db.materias.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'corequisitos': int}})//ID del corequisito que voy a eliminar
//--------------------------------------------------------------------------
db.profesores.insertOne([
{
  "_id":int,
  "profesor":String,
  "codigoEsc":int //ID escuela
})
//--------------------------------------------------------------------------
db.estudiantes.insertOne(
{
  "_id":int,
  "estudiante":String,
  "carnet":int,
  "activo":boolean,
  "programasA":[int]//ID programasAcademicos
})
//Añadir programasAcademicos
db.estudiantes.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"programasA":int}})//ID del programaAcademico que voy a agregar
//Eliminar programasAcademicos  ____________________________________________________DELETE
db.estudiantes.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'programasA': int}})//ID del programaAcademico que voy a eliminar
//--------------------------------------------------------------------------
db.mallasCurriculares.insertOne(
{
  "_id":int,
  "materias":[int],//ID materias
  "numeroPlan":int,
  "anno": int,
  "codigoProgr":int//ID programa pertenece
})
//Añadir materias
db.mallasCurriculares.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"materias":int}})//ID de la materia que voy a agregar
//Eliminar materias  ______________________________________________________________DELETE
db.mallasCurriculares.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'materias': int}})//ID de la materia que voy a eliminar
//--------------------------------------------------------------------------
db.grupos.insertOne(
{
  "_id":int,
  "codigoProfe":int,//ID profesor
  "horario":String,//"L_7:30-9:20;M_7:30-9:20"
  "estudiantes":[int]//ID estudiantes
})
//Añadir estudiantes (Matricular)
db.grupos.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"estudiantes":int}})//ID del estudiante que voy a agregar
//Eliminar estudiantes  __________________________________________________________DELETE
db.grupos.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'estudiantes': int}})//ID del estudiante que voy a eliminar
//--------------------------------------------------------------------------
db.cursos.insertOne({
  "_id":int,
  "semestre":int,
  "anno":int,
  "codigoMateria":int,//ID materia que da este curso
  "grupos":[int]//ID Grupos que pertenecen a este curso
})
//Añadir grupos
db.cursos.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"grupos":int}})//ID del grupo que voy a agregar
//Eliminar estudiantes  ________________________________________________________ DELETE
db.cursos.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'grupos': int}})//ID del grupo que voy a eliminar
//--------------------------------------------------------------------------
//GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET
//GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET - GET


//Gets en dónde se obtiene la información pero se utilizan los ids
db.cursos.find().pretty()
db.escuelas.find().pretty()
db.estudiantes.find().pretty()
db.grupos.find().pretty()
db.instituciones.find().pretty()
db.mallasCurriculares.find().pretty()
db.materias.find().pretty()
db.profesores.find().pretty()
db.programasAcademicos.find().pretty()
//Querys más complejos en dónde se busca el id para mostrar la represenación del objeto
//Información sobre los cursos (Incluye materia, estudiantes y profesores)
db.cursos.aggregate([ 
{
  $lookup:{
    from:"materias",
    localField:"codigoMateria",
    foreignField:"_id",
    as: "materia"
  }
},
{
  $unwind:"$materia"
},
{
  $lookup:{
    from:"grupos",
    localField:"grupos",
    foreignField:"_id",
    as: "gruposCurso"
  }
},
{
  $lookup:{
    from:"estudiantes",
    localField:"gruposCurso.estudiantes",
   	foreignField:"_id",
   	as: "estudiantes"
  }
},

{
  $lookup:{
    from:"profesores",
    localField:"gruposCurso.codigoProfe",
    foreignField:"_id",
    as: "profesores"
  }
},
{
  $project:{
    _id:1,
    semestre:1,
    anno:1,
    materia:1,
    gruposCurso:1,
    profesores:1,
    estudiantes:1,
  }
}
])
//Información de las escuelas y de la institución a la que pertenecen
db.escuelas.aggregate([ 
{
  $lookup:{
    from:"instituciones",
    localField:"codigoInst",
    foreignField:"_id",
    as: "Institucion"
  }
},
{
  $unwind:"$Institucion"
},
{
  $project:{
    codigoInst:0
  }
}
]
//Obtener por escuela, los programas academicos que ofrecen
db.escuelas.aggregate([ 
{
  $lookup:{
    from:"programasAcademicos",
    localField:"_id",
    foreignField:"codigoEsc",
    as: "ProgramasAcademicos"
  }
},
{
  $project:{
    "ProgramasAcademicos.codigoEsc":0
  }
}
])
db.cursos.
db.escuelas.
db.estudiantes.
db.grupos.
db.instituciones.
db.mallasCurriculares.
db.materias.
db.profesores.
db.programasAcademicos.
//DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE
//DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE
db.cursos.deleteMany({ _id : int })
db.escuelas.deleteMany({ _id : int })
db.estudiantes.deleteMany({ _id : int })
db.grupos.deleteMany({ _id : int })
db.instituciones.deleteMany({ _id : int })
db.mallasCurriculares.deleteMany({ _id : int })
db.materias.deleteMany({ _id : int })
db.profesores.deleteMany({ _id : int })
db.programasAcademicos.deleteMany({ _id : int })

