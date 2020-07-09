const errMd = 'No es una extension válida';
const errExist = 'No existe el archivo o directorio'
const errMdFiles = 'Alguno de los archivos, no es md';
const errL = 'No hay links que evaluar';
const errFile = 'No es un archivo';
const errDir = 'No es un directorio';
const errPath = 'No se puede iniciar la función si no hay archivo que leer';
const errRead = 'No se pudo leer el archivo';
const help = `-v ver la versión actual 
-h --help Ver la lista de comandos y lo que hace 
-repo Repositorio de la librería
-a author Autores del repositorio
--validate --stats Mostrar el total de links, cuántos rotos y cúantos no se repiten 
--validate  
--stats`;
const errCommand = 'Comando no encontrado' + '\n' + help;
const repository = 'Repository: https://github.com/Yaidi/GDL004-md-links/tree/master';
module.exports = {
    errMd,
    errMdFiles,
    errL,
    errFile,
    errRead,
    errPath,
    errCommand,
    errDir,
    help,
    repository,
    errExist,
}