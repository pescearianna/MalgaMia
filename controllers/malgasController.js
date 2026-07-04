
import validateMalga from '../schemas/schemas.js';


export class MalgasController{
    constructor ({malgasModel}){
            this.malgasModel = malgasModel
    }
    
    getAll = async (req,res) => {
        const {region,province,town} = req.query
        const malgas = await this.malgasModel.getAll({region,province,town});
        res.json(malgas)
        
    }

    getById = async (req,res) => {
        const {id} = req.params;
        const malga = await this.malgasModel.getById({id})
        if (!malga) {
        return res.status(404).json({ error: 'Malga not found' });
        }
        res.json(malga);
    }
}