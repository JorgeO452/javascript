let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Acción de listar');
        break;
    case 'guardar':
        console.log('Acción de guardar');
        break;
    case 'borrar':
        console.log('Borrar un registro existente');
        break;
    default:
        console.log('Acción no permitida');
        break;
}