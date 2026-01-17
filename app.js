import express from 'express';

import cors from 'cors';
import globalErrorHandelar from './src/middleware/errorMiddleware.js';
import notFound from './src/middleware/notFound.js';


const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});





app.use(globalErrorHandelar);
app.use(notFound);

export default app;
