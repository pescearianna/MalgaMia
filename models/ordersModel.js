import { pool } from '../connection_db.js';

export class OrdersModel {
    static async getAll() {
        const [rows] = await pool.query(
            `SELECT * FROM orders;`
        );
        return rows;
    }

    static async getById({id}) {
        const [rows] = await pool.query(
            `SELECT * FROM orders WHERE id=?;`,[id]
        );
        return rows;
    }
}