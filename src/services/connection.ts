import * as dotenv from 'dotenv'
import {  Sequelize } from 'sequelize-typescript'
import { Employees } from '../models/employees.model'
import { Polos } from '../models/polos.model'
import { Unidades } from '../models/unidades.model'
import { Usuarios } from '../models/users.model'
import { CpfRegistred } from '../models/cpf_registred.model'
import { RegisteredRgsByEmployees } from '../models/registered_rgs_by_employees.model'
import { Holidays } from '../models/holidays.model'
import { Alerts } from '../models/alerts.model'
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
  models:[
    Polos, Employees, Unidades, Usuarios, 
    CpfRegistred, RegisteredRgsByEmployees,
    Holidays, Alerts
  ]
})


export default dbConnection