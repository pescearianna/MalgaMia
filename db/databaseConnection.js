import mysql from 'mysql2/promise';

const config={
    host: 'localhost',
    user: '',
    port: 3306,
    password: '',
    database: 'malgamia_db'
}

const connection = await mysql.createConnection(config)