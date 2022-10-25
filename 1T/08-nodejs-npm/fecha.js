/* Crear un programa que imprima la fecha actual, en formato dd-MM-YYYY HH:mm:ss y se actu-
alice cada segundo.

• Modificación: Cada vez que los segundos se pongan a 0 o múltiplo de 10, se pondrá en verde el
tiempo (día excluido).*/

import chalk from 'chalk';
import {DateTime} from 'luxon';

function fecha() {
    if(DateTime.now().second === 0 || DateTime.now().second % 10 === 0){
        return chalk.green(DateTime.now().toFormat("dd-MM-yyyy HH:mm:ss"));     
    }else{
        return DateTime.now().toFormat("dd-MM-yyyy HH:mm:ss");
        
    } 
}
    setInterval(() => {
        console.log(fecha())
    }, 1000);
            







