import { Employees } from "../models/employees.model";
import { sign } from 'jsonwebtoken'
import { Polos } from "../models/polos.model";
import * as dotenv from 'dotenv'
dotenv.config()

interface LoginTypes {
    user: string;
    password: string;
}

 const employeesLogin = async (data: LoginTypes) => {
    const response = await Employees.findOne({
        where:{
            username: data.user,
            password: data.password
        },
        include: Polos
    })
    if (!response) {
        return { message:"Usuario e/ou senha estão incorretos", status: 404}
    }
    const { id, username, email, roles_level } = response.dataValues
    const token = sign(
        {
            id: id,
            username: username,
            roles_level: roles_level,
        },
        process.env.SECRET as string,
        {
            expiresIn: 3600,
        }
    )
    return { 
        id: id,
        message:"Logado com sucesso", 
        name: username, 
        email: email,
        token: token,
        polo: response.dataValues.polos.dataValues,
        roles:roles_level,
        status: 200
    }
}
export default {
    employeesLogin
}