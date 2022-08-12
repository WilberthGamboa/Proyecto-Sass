# Notas

## LLamar tareas 

### Llamar tareas por medio de npx
Para llamar las tareas creadas en gulpfile.js se utiliza el comando npx gulp [nombre de la tarea]

### Llamar tareas por medio del package.json por npm 
Se debe agregar el nombre de la tarea en el apartado de scripts, ejemplo:

"tarea"(nombre de la nueva tarea) : "gulp tarea (el nombre de la función establecida en el gulp)"
siendo el comando npm run tarea

## Plugin que permite conectar SASS con GULP 
npm i --save-dev gulp-sass

## Ejecutar la tarea

npx gulp (nombre tarea)   // npx gulp dev

## SASS 
### Identificar archivos principales
Para identificar que es un archivo secundario _nombrearchivo un principal no lleva el guión bajo 
### Estructura 
Dentro de cada carpeta se debe alojar un _index.scss