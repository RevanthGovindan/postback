const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${message}`;
});


const Logger = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'INFO' }),
        timestamp(),
        myFormat),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({ filename: 'out.log' }),
    ],
});

module.exports = Logger;