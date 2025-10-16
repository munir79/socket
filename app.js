import express from 'express';

import cors from 'cors';
import globalErrorHandelar from './src/middleware/errorMiddleware.js';
import notFound from './src/middleware/notFound.js';
import { AuthRouter } from './src/module/auth/auth.route.js';

const app = express();

app.use(cors());

app.use(express.json());


app.use('/api/v1/user',AuthRouter)

app.use(globalErrorHandelar);
app.use(notFound);

export default app;
