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

function insertInstitucion(nombre, pais, sede){

   var documentoInsertado = db.instituciones.insertOne({
  "_id": getNextSequenceValue("instituciones_id"),
  "institucion":nombre,
  "pais":pais,
  "sede":sede
  });
	
   return documentoInsertado;
}
//--------------------------------------------------------------------------
db.escuelas.insertOne(
{
  "_id":int,
  "escuela":String,
  "codigoInst":int //ID de la institucion
})

function insertEscuelas(nombre, codigoInst){

   var documentoInsertado = db.escuelas.insertOne({
  "_id": getNextSequenceValue("escuelas_id"),
  "escuela":nombre,
  "codigoInst":codigoInst,
  });
	
   return documentoInsertado;
}
//--------------------------------------------------------------------------
db.programasAcademicos.insertOne({
  "_id":int,
  "programaA":String,
  "codigoEsc":int //ID de la escuela
})

function insertProgramasAcademicos(nombre, codigoEsc){

   var documentoInsertado = db.programasAcademicos.insertOne({
  "_id": getNextSequenceValue("programasAcademicos_id"),
  "programaA":nombre,
  "codigoEsc":codigoEsc,
  });
	
   return documentoInsertado;
}

//--------------------------------------------------------------------------
db.materias.insertOne(
{
  "_id":int,
  "materia":String,
  "requisitos":[int], //ID de otras materias
  "corequisitos":[int],
  "codigoEsc":int //ID escuela
})
function insertMaterias(nombre, codigoEsc){

   var documentoInsertado = db.materias.insertOne({
  "_id": getNextSequenceValue("materias_id"),
  "materia":nombre,
  "requisitos":[],
  "corequisitos":[],
  "codigoEsc":codigoEsc,
  });
	
   return documentoInsertado;
}
//Añadir requisitos
db.materias.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"requisitos":int}})//ID del requisito que voy a agregar

function agregarReqMateria(idMateria, nuevoReq){
   var documentoActualizado = db.materias.update(
     {_id:idMateria},
     {$addToSet:{"requisitos":nuevoReq}}
   )
   return documentoActualizado;
}
//Eliminar requisitos  _____________________________________________________________DELETE
db.materias.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'requisitos': int}})//ID del requisito que voy a eliminar

function eliminarReqMateria(idMateria, eliminar){
   var documentoActualizado = db.materias.update(
     {_id:idMateria},
     { $pull: { 'requisitos': eliminar}}
   )
   return documentoActualizado;
}

//Añadir corequisitos
db.materias.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"corequisitos":int}})//ID del corequisito que voy a agregar

function agregarCoreqMateria(idMateria, nuevoCoreq){
   var documentoActualizado = db.materias.update(
     {_id:idMateria},
     {$addToSet:{"corequisitos":nuevoReq}}
   )
   return documentoActualizado;
}
//Eliminar corequisitos  ___________________________________________________________DELETE
db.materias.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'corequisitos': int}})//ID del corequisito que voy a eliminar

function eliminarCoreqMateria(idMateria, eliminar){
   var documentoActualizado = db.materias.update(
     {_id:idMateria},
     { $pull: { 'corequisitos': eliminar}}
   )
   return documentoActualizado;
}

//--------------------------------------------------------------------------
db.profesores.insertOne(
{
  "_id":int,
  "profesor":String,
  "codigoEsc":int //ID escuela
})
function insertProfesores(nombre, requisitos, corequisitos, codigoEsc){
   var documentoInsertado = db.profesores.insertOne({
  "_id": getNextSequenceValue("profesores_id"),
  "profesor":nombre,
  "codigoEsc":codigoEsc
  });
	
   return documentoInsertado;
}
//--------------------------------------------------------------------------
db.estudiantes.insertOne(
{
  "_id":int,
  "estudiante":String,
  "carnet":int,
  "activo":boolean,
  "programasA":[int]//ID programasAcademicos
})

function insertEstudiantes(nombre, carnet){
   var documentoInsertado = db.estudiantes.insertOne({
  "_id": getNextSequenceValue("estudiantes_id"),
  "estudiante":nombre,
  "carnet":carnet,
  "activo":true,
  "programasA":[]
  });
	
   return documentoInsertado;
}
//Añadir programasAcademicos
db.estudiantes.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"programasA":int}})//ID del programaAcademico que voy a agregar

function agregarProgramasA(idEstudiante, idPrograma){
   var documentoActualizado = db.estudiantes.update(
     {_id:idEstudiante},
     {$addToSet:{"programasA":idPrograma}}
   )
   return documentoActualizado;
}
//Eliminar programasAcademicos  ____________________________________________________DELETE
db.estudiantes.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'programasA': int}})//ID del programaAcademico que voy a eliminar

function eliminarProgramasA(idEstudiante, idPrograma){
   var documentoActualizado = db.estudiantes.update(
     {_id:idEstudiante},
     { $pull: { 'programasA': idPrograma}}
   )
   return documentoActualizado;
}
//--------------------------------------------------------------------------
db.mallasCurriculares.insertOne(
{
  "_id":int,
  "materias":[int],//ID materias
  "numeroPlan":int,
  "anno": int,
  "codigoProgr":int//ID programa pertenece
})
function insertMallasCurriculares(numeroPlan, anho, codigoProgr){
   var documentoInsertado = db.mallasCurriculares.insertOne({
  "_id": getNextSequenceValue("mallasCurriculares_id"),
  "materias":[],
  "numeroPlan":numeroPlan,
  "anho":anho,
  "codigoProgr":codigoProgr
  });
	
   return documentoInsertado;
}
//Añadir materias
db.mallasCurriculares.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"materias":int}})//ID de la materia que voy a agregar

function agregarMallasCurriculares(idMalla, idMateria){
   var documentoActualizado = db.mallasCurriculares.update(
     {_id:idMalla},
     {$addToSet:{"materias":idMateria}}
   )
   return documentoActualizado;
}
//Eliminar materias  ______________________________________________________________DELETE
db.mallasCurriculares.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'materias': int}})//ID de la materia que voy a eliminar

function eliminarMallasCurriculares(idMalla, idMateria){
   var documentoActualizado = db.mallasCurriculares.update(
     {_id:idMalla},
     { $pull: { 'materias': idMateria}}
   )
   return documentoActualizado;
}
//--------------------------------------------------------------------------
db.grupos.insertOne(
{
  "_id":int,
  "codigoProfe":int,//ID profesor
  "horario":String,//"L_7:30-9:20;M_7:30-9:20"
  "estudiantes":[int]//ID estudiantes
})
function insertGrupos(codigoProfe, horario){
   var documentoInsertado = db.grupos.insertOne({
  "_id": getNextSequenceValue("grupos_id"),
  "codigoProfe":codigoProfe,
  "horario":horario,
  "estudiantes":[]
  });
	
   return documentoInsertado;
}
//Añadir estudiantes (Matricular)
db.grupos.update(
{_id:int},//ID de lo que voy a modificar
{$addToSet:{"estudiantes":int}})//ID del estudiante que voy a agregar


//Eliminar estudiantes  __________________________________________________________DELETE
db.grupos.update(
{_id:int},//ID de lo que voy a modificar
{ $pull: { 'estudiantes': int}})//ID del estudiante que voy a eliminar

function eliminarMallasCurriculares(idMalla, idMateria){
   var documentoActualizado = db.mallasCurriculares.update(
     {_id:idMalla},
     { $pull: { 'materias': idMateria}}
   )
   return documentoActualizado;
}
//--------------------------------------------------------------------------
db.cursos.insertOne({
  "_id":int,
  "semestre":int,
  "anno":int,
  "codigoMateria":int,//ID materia que da este curso
  "grupos":[int]//ID Grupos que pertenecen a este curso
})
function insertCursos(anho, codigoMateria, grupos){
   var documentoInsertado = db.cursos.insertOne({
  "_id": getNextSequenceValue("cursos_id"),
  "anho":anho,
  "codigoMateria":codigoMateria,
  "grupos": grupos
  });
	
   return documentoInsertado;
}
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
function getCursos(){
   var documento = db.cursos.find();
   return documento;
}
db.escuelas.find().pretty()
function getEscuelas(){
   var documento = db.escuelas.find();
   return documento;
}
db.estudiantes.find().pretty()
function getEstudiantes(){
   var documento = db.estudiantes.find();
   return documento;
}
db.grupos.find().pretty()
function getGrupos(){
   var documento = db.grupos.find();
   return documento;
}
db.instituciones.find().pretty()
function getInstituciones(){
   var documento = db.instituciones.find();
   return documento;
}
db.mallasCurriculares.find().pretty()
function getMallasCurriculares(){
   var documento = db.mallasCurriculares.find();
   return documento;
}
db.materias.find().pretty()
function getMaterias(){
   var documento = db.materias.find();
   return documento;
}
db.profesores.find().pretty()
function getProfesores(){
   var documento = db.profesores.find();
   return documento;
}
db.programasAcademicos.find().pretty()
function getProgramasAcademicos(){
   var documento = db.programasAcademicos.find();
   return documento;
}
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

