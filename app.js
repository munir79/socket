import express from 'express';

import cors from 'cors';
import globalErrorHandelar from './src/middleware/errorMiddleware.js';
import notFound from './src/middleware/notFound.js';
import { AuthRouter } from './src/module/user/user.route.js';
import { MessageRouter } from './src/module/message/message.route.js';


const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use('/api/v1/user',AuthRouter);
app.use('/api/v1/message',MessageRouter);



app.use(globalErrorHandelar);
app.use(notFound);

export default app;
