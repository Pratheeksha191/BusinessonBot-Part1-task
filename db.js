const Pool = require('pg').Pool;


const poolconfig = process.env.DATABASE_URL ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        },
    } 
    : 
    {
        user: 'postgres',
        host: 'localhost',
        database: 'Bottask',
        password: '1234',
        port: 5432,
    }

const pool = new Pool(poolconfig);

module.exports = pool;
