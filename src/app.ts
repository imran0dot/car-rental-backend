import express from 'express';
import cors from 'cors';
import { router } from './router'
import globalErrorHandler from './app/utils/globarError';

const app = express();

// parsers 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('working')
});

app.use('/api/v1/', router)





app.use('*', globalErrorHandler)
export default app;