import { pool } from '../connection_db.js';


function allDataFormat(rows){
const malgasMap = rows.reduce((acc, row) => {
        if (!acc[row.id]) {
            acc[row.id] = {
                id: row.id,
                name: row.name,
                region: row.region,
                province: row.province,
                town: row.town,
                high_mt: row.high_mt,
                geo_lat: row.geo_lat,
                geo_long: row.geo_long,
                park: row.park,
                contacts_tel: row.contacts_tel,
                contacts_web: row.contacts_web,
                img_url: row.img_url,
                opening_start: row.opening_start,
                opening_end: row.opening_end,
                stocks: []
            };
        }
        if (row.p_name) {
            acc[row.id].stocks.push({
                name: row.p_name,
                category: row.p_category,
                price: row.price,
                available: row.available,
                quantity_available: row.quantity_available,
                last_update: row.last_update,
                denomination: row.denomination,
                description: row.product_description
            });
        }
        return acc;
    }, {});
    return Object.values(malgasMap);
}



export class MalgasModel {
    static SQL = `
        SELECT 
            m.id,
            m.name,
            m.region,
            m.province,
            m.town,
            m.high_mt,
            m.geo_lat,
            m.geo_long,
            m.park,
            m.contacts_tel,
            m.contacts_web,
            m.img_url,
            m.opening_start,
            m.opening_end,
            p.name AS p_name,
            p.category AS p_category,
            s.price,
            s.available,
            s.quantity_available,
            s.last_update,
            s.denomination,
            s.description AS product_description
        FROM malgas m
        LEFT JOIN stocks s ON m.id = s.malga_id
        LEFT JOIN products p ON s.product_id = p.id
        `;

    static async getAll({region,province,town,product}={}) {
        
        const filters = [];
        const conditions = [];
        if(region){
            filters.push(region);
            conditions.push("m.region=?")
        };
        if(province){
            filters.push(province);
            conditions.push("m.province=?")
        };
        if(town){
            filters.push(town);
            conditions.push("m.town=?")
        };
        if(product){
            filters.push(product);
            conditions.push("p.name=?")
        };

        if (conditions.length > 0) {
            MalgasModel.SQL += " WHERE " + conditions.join(" AND ");
        }
      
    const [rows] = await pool.query(MalgasModel.SQL, filters);

    return allDataFormat(rows);

    
    }

    static async getById({id}) {
        const sql = `${MalgasModel.SQL} WHERE m.id = ?`;
        const [rows] = await pool.query(sql, [id]);
        return allDataFormat(rows);
    }

    
}