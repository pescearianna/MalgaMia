import { pool } from '../connection_db.js';

export class StocksModel {
    static async getAll() {
        const [rows] = await pool.query(
            `SELECT * FROM stocks;`
        );
        return rows;
    }

    static async getById({id}) {
        const [rows] = await pool.query(
            `SELECT * FROM stocks WHERE id=?;`,[id]
        );
        return rows;
    }

    // static async newStock({malgaId, productId, price, quantity, description}){
    //     const [rows] = await connection.query(
    //         `INSERT INTO stocks(malga_id, product_id, price, quantity_av, description) values ?,?,?,?,?;`[malgaId, productId, price, quantity, description]
    //     )
    // }
}