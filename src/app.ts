import express from 'express';
import cors from 'cors';
import { router } from './router'
import globalErrorHandler from './app/utils/globarError';
import notFound from './app/utils/notFound';

const app = express();

// parsers 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('working')
});

app.use('/api/', router)

app.use('*', notFound)
app.use('*', globalErrorHandler)
export default app;