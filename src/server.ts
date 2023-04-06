import express from 'express'
import Routes from './routes/routes'
import * as dotenv from 'dotenv'
import './services/connection';
import dbConnection from './services/connection';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(Routes)

dbConnection.sync({alter:true})
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))