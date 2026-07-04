


export class OrdersController{
    constructor ({ordersModel}){
            this.ordersModel = ordersModel
    }
    
    getAll = async (req,res) => {
        const orders = await this.ordersModel.getAll();
        res.json(orders)
        
    }

    getById = async (req,res) => {
        const {id} = req.params;
        const order = await this.ordersModel.getById({id})
        if (!order) {
        return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    }
}