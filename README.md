# PrograIBases2

El sistema permite registrar y realizar el mantenimiento y la visualización de:
1. Instituciones académicas
2. Escuelas
3. Programas académicos
4. Mallas curriculares (lista simple de materias)
5. Cursos y grupos
6. Matricula de estudiantes en grupos
7. Materias
8. Profesores
9. Estudiantes
10. Horarios de grupos
11. Control de asistencia
12. Rubros de evaluación: tareas, quices, proyectos
13. Jerarquía de temas y subtemas para las materias
14. Foros de discusión
15. Envío de mensajes
16. Registros de notas finales

El proyecto consiste en una aplicación web empleando el stack MEAN (MongoDB, Express, Angular, NodeJS).
Al registrarse un profesor, debe poder elegir la institución a la que pertenece de entre las registradas actualmente en el sistema, si ésta no se encuentra, debe ser creada. Esto mismo debe suceder con la escuela, el programa académico, la malla curricular y las materias, incluyendo la jerarquía de temas y subtemas de la misma. En un primer momento puede que la malla curricular cuente solamente con una materia, y con el tiempo se vaya registrando el resto. Los cursos pueden contar con uno o más grupos para el período lectivo en que se registran, deben ser asociados por el profesor con una materia definida en la estructura anterior. Para cada grupo, el profesor deberá definir el horario, los rubros a evaluar con sus respectivos porcentajes del total y fecha de entrega, llevar el control de asistencia y registrar las notas de cada rubro de evaluación, y finalmente podrá generar el informe final de notas. Los estudiantes, al registrarse, deberán indicar la institución, escuela y programa académico a los que pertenece. Las opciones disponibles para cada una debes ser ingresadas previamente por algún profesor. En cada período lectivo los estudiantes podrán matricularse en algún grupo de un curso en la malla curricular de su programa académico. A partir de ahí tendrá acceso a toda su información registrada en dicho grupo: rubros que serán evaluados (especificación), puntaje obtenido en esos rubros, registro de asistencia, temas y subtemas, foro de discusión del grupo, mensajes recibidos/enviados de/a otros estudiantes del grupo o el profesor, malla curricular y sus cursos, información del programa académico, escuela e institución.
