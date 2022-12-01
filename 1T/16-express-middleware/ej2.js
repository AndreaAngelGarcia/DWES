/* Crear un logger con winston para imprimir a múltiples niveles formateando la salida con colores
– Formato: [Fecha] nivel: Mensaje */

import winston from "winston";

const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all: true
        }),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${[info.timestamp]}: ${info.level}: ${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

logger.info('Información, Winston!!!');
logger.warn('Ten cuidado, Winston!!');
logger.error('Error, Winston!');