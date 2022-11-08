import {DateTime} from 'luxon';

function dateCompare(fecha1, fecha2) {
    if (fecha1 < fecha2) {
        const fecha = {
            startDate: fecha1, 
            endDate: fecha2
        }
        return fecha;
    } else if (fecha1 > fecha2) {
        const fecha = {
            startDate: fecha2, 
            endDate: fecha1
        }
        return fecha;
    } else {

        fecha2 = DateTime.now().toFormat("dd/MM/yyyy");

        if (fecha1 < fecha2) {
            const fecha = {
                startDate: fecha1, 
                endDate: fecha2
            }
            return fecha;
        } else if (fecha1 > fecha2) {
            const fecha = {
                startDate: fecha2, 
                endDate: fecha1
            }
            return fecha;
        } 
    }
}
export default dateCompare;