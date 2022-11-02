/* Script llamado date que imprima la fecha actual */

import {DateTime} from 'luxon';

const fecha = DateTime.now().toFormat("dd-MM-yyyy");

console.log(fecha);

