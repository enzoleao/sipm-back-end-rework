import { Employees } from "../models/employees.model";
import { sign } from 'jsonwebtoken'
import { Polos } from "../models/polos.model";
import { hash, compare } from "bcrypt";

interface LoginTypes {
    user: string;
    password: string;
}
interface EmployeesRegisterType {
    username: string
    email: string
    password: string
    roles_level: number
    polos_id: number
}
const employeesLogin = async (data: LoginTypes) => {
    const response = await Employees.findOne({
        where:{
            username: data.user,
        },
        include: Polos
    })
    if (!response) {
        return { message:"Usuario e/ou senha estão incorretos", status: 404}
    }
    const passwordMatch = await compare(data.password, response.password)
    if (!passwordMatch){
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
const employeesRegister = async (data: EmployeesRegisterType) => {
    const { username, email, password, roles_level, polos_id } = data
    const passwordHash = await hash(password, 8)
    const response = await Employees.create({
        username: username,
        email: email,
        password: passwordHash,
        roles_level: roles_level,
        polos_id: polos_id
    })
    .then((res) => {return {message:"Cadastrado com sucesso", status: 201}})
    .catch((err)=> {return {message:"Ocorreu algum erro", status: 400}})
    return (response)
}
export default {
    employeesLogin,
    employeesRegister
}