


import mysql from 'mysql2/promise';


const config={
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'malgamia_db'
}

export const pool = mysql.createPool(config)