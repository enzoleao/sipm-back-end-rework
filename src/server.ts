import './services/connection';
import 'express-async-errors';
import * as dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express';
import Routes from './routes/routes'
import { AppError } from './erros/AppError';
// import dbConnection from './services/connection';


dotenv.config()
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(Routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    };

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

//dbConnection.sync({alter:true})
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))