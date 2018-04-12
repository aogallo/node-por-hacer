const colors = require('colors');
const argv = require('./config/yargs').argv;
let comando = argv._[0];
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

switch (comando) {
    case 'crear':
        //console.log('Crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //console.log('listar');
        let listado = porHacer.getListado();
        console.log('===Por Hacer==='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==============='.green);
        }


        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');
}