import express from 'express';

import cors from 'cors';
import globalErrorHandelar from './src/middleware/errorMiddleware.js';
import notFound from './src/middleware/notFound.js';
import { AuthRouter } from './src/module/auth/auth.route.js';
import { MessageRouter } from './src/module/message/message.route.js';
import { ChatRouter } from './src/module/chat/chat.route.js';

const app = express();

app.use(cors());

app.use(express.json());


app.use('/api/v1/user',AuthRouter)
app.use('/api/v1/message',MessageRouter);
app.use('/api/v1/chat',ChatRouter);


app.use(globalErrorHandelar);
app.use(notFound);

export default app;
