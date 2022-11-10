import { DateTime } from 'luxon';

const fecha = DateTime.now().toFormat('dd-MM-yyyy');

console.log(fecha);

// He usado Eslint para detectar y corregir los errores
