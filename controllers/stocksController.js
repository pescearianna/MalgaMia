export class StocksController{
    constructor ({stocksModel}){
            this.stocksModel = stocksModel
    }
    
    getAll = async (req,res) => {
        const stocks = await this.stocksModel.getAll();
        res.json(stocks);
        
    }

    getById = async (req,res) => {
        const {id} = req.params;
        const stock = await this.stocksModel.getById({id})
        if (!stock) {
        return res.status(404).json({ error: 'Order not found' });
        }
        res.json(stock);
    }
}