import { pool } from '../connection_db.js';

export class UsersModel {
    static async getAll() {
        const [rows] = await pool.query(
            `SELECT * FROM users;`
        );
        return rows;
    }

    static async getById({id}) {
        const [rows] = await pool.query(
            `SELECT * FROM users WHERE id=?;`,[id]
        );
        return rows;
    }

    static async newUser({email,password,role}){
        const newUser = await pool.query(
            "INSERT INTO users (email, password,role,created_at) VALUES (?,?,?, NOW())", [email,password,role]
        )
    }

    static async getByEmail({email}){
        const [rows] = await pool.query(
            `SELECT email,password FROM users WHERE email = ?`,[email]
        );
        return rows.length > 0 ? rows[0] : null;
    }
}