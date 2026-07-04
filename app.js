import express from 'express';

const app = express();
app.disable('x-powered-by');
app.use(express.json());
const PORT = process.env.PORT || 3000;

import { malgasRouter } from './routes/api/malgas.js';
import { ordersRouter } from './routes/api/orders.js';
import { stocksRouter } from './routes/api/stocks.js';
import { usersRouter } from './routes/api/users.js';

app.use('/malgas', malgasRouter);
app.use('/orders', ordersRouter);
app.use('/stocks', stocksRouter);
app.use('/users', usersRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

