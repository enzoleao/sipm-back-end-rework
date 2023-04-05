import * as dotenv from 'dotenv'
import {  Sequelize } from 'sequelize-typescript'
import { Usuarios } from '../models/usuarios.model'
import { Polos } from '../models/polos.model'
dotenv.config()

const DB_NAME = process.env.DB_NAME as string
const DB_USER = process.env.DB_USER as string
const DB_HOST = process.env.DB_HOST
const DB_PASSWORD = process.env.DB_PASSWORD


const dbConnection = new Sequelize({
  dialect: 'mysql',
  host:DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME, 
  models:[Polos, Usuarios]
})


export default dbConnection