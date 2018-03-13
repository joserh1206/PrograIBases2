function insertInstitucion(nombre, pais, sede){
   var documentoInsertado = db.instituciones.insertOne({
   "_id": getNextSequenceValue("instituciones_id"),
   "institucion":nombre,
   "pais":pais,
   "sede":sede
   });
	
   return documentoInsertado;
}

function insertEscuelas(nombre, codigoInst){

   var documentoInsertado = db.escuelas.insertOne({
  "_id": getNextSequenceValue("escuelas_id"),
  "escuela":nombre,
  "codigoInst":codigoInst,
  });
	
   return documentoInsertado;
}

function insertProgramasAcademicos(nombre, codigoEsc){

   var documentoInsertado = db.programasAcademicos.insertOne({
  "_id": getNextSequenceValue("programasAcademicos_id"),
  "programaA":nombre,
  "codigoEsc":codigoEsc,
  });
	
   return documentoInsertado;
}

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

function insertProfesores(nombre, carnet, password, codigoEsc){
   var documentoInsertado = db.profesores.insertOne({
  "_id": getNextSequenceValue("profesores_id"),
  "carnet":carnet,
  "profesor":nombre,
  "codigoEsc":codigoEsc,
  "password":password
  });
	
   return documentoInsertado;
}

function insertEstudiantes(nombre, carnet, password){
   var documentoInsertado = db.estudiantes.insertOne({
  "_id": getNextSequenceValue("estudiantes_id"),
  "estudiante":nombre,
  "carnet":carnet,
  "activo":true,
  "programasA":[],
  "password":password,
  "codigoInst":[]
  });
	
   return documentoInsertado;
}

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

function insertGrupos(numeroGrupo, codigoProfe, horario){
   var documentoInsertado = db.grupos.insertOne({
  "_id": getNextSequenceValue("grupos_id"),
  "numeroGrupo":numeroGrupo,
  "codigoProfe":codigoProfe,
  "horario":horario,
  "estudiantes":[]
  });
	
   return documentoInsertado;
}

function insertCursos(semestre, anho, codigoMateria, grupos){
   var documentoInsertado = db.cursos.insertOne({
  "_id": getNextSequenceValue("cursos_id"),
  "semestre": semestre,
  "anho":anho,
  "codigoMateria":codigoMateria,
  "grupos": []
  });
	
   return documentoInsertado;
}


function agregarReqMateria(idMateria, nuevoReq){
   var documentoActualizado = db.materias.update(
     {_id:idMateria},
     {$addToSet:{"requisitos":nuevoReq}}
   )
   return documentoActualizado;
}

function eliminarReqMateria(idMateria, eliminar){
   var documentoActualizado = db.materias.update(
     {_id:idMateria},
     { $pull: { 'requisitos': eliminar}}
   )
   return documentoActualizado;
}

function agregarCoreqMateria(idMateria, nuevoCoreq){
   var documentoActualizado = db.materias.update(
     {_id:idMateria},
     {$addToSet:{"corequisitos":nuevoReq}}
   )
   return documentoActualizado;
}

function eliminarCoreqMateria(idMateria, eliminar){
   var documentoActualizado = db.materias.update(
     {_id:idMateria},
     { $pull: { 'corequisitos': eliminar}}
   )
   return documentoActualizado;
}

function agregarProgramasA(idEstudiante, idPrograma){
   var documentoActualizado = db.estudiantes.update(
     {_id:idEstudiante},
     {$addToSet:{"programasA":idPrograma}}
   )
   return documentoActualizado;
}

function eliminarProgramasA(idEstudiante, idPrograma){
   var documentoActualizado = db.estudiantes.update(
     {_id:idEstudiante},
     { $pull: { 'programasA': idPrograma}}
   )
   return documentoActualizado;
}

function agregarMateria(idMalla, idMateria){
   var documentoActualizado = db.mallasCurriculares.update(
     {_id:idMalla},
     {$addToSet:{"materias":idMateria}}
   )
   return documentoActualizado;
}

function eliminarMateria(idMalla, idMateria){
   var documentoActualizado = db.mallasCurriculares.update(
     {_id:idMalla},
     { $pull: { 'materias': idMateria}}
   )
   return documentoActualizado;
}


function getCursos(){
   var documento = db.cursos.find();
   return documento;
}

function getEscuelas(){
   var documento = db.escuelas.find();
   return documento;
}

function getEstudiantes(){
   var documento = db.estudiantes.find();
   return documento;
}

function getGrupos(){
   var documento = db.grupos.find();
   return documento;
}

function getInstituciones(){
   var documento = db.instituciones.find();
   return documento;
}

function getMallasCurriculares(){
   var documento = db.mallasCurriculares.find();
   return documento;
}

function getMaterias(){
   var documento = db.materias.find();
   return documento;
}

function getProfesores(){
   var documento = db.profesores.find();
   return documento;
}

function getProgramasAcademicos(){
   var documento = db.programasAcademicos.find();
   return documento;
}

