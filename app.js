import express from 'express';

import cors from 'cors';
import { messageRouter } from './src/routes/messageRoute.js';
import globalErrorHandelar from './src/middleware/errorMiddleware.js';
import notFound from './src/middleware/notFound.js';
import { RouterMessage } from './src/module/message/message.route.js';

const app = express();

app.use(cors());

app.use(express.json());



//
app.use('/api/message', messageRouter);
app.use('/api/v1/new-message',RouterMessage);

app.use(globalErrorHandelar);
app.use(notFound);

export default app;
