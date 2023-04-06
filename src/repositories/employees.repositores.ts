import { Employees } from "../models/employees.model";

interface LoginTypes {
    user: string;
    password: string;
}

 const employeesLogin = async (data: LoginTypes) => {
    const response = await Employees.findAll({
        where:{
            username: data.user,
            password: data.password
        }
    })
    if (response) {
        console.log(response)
    }
}
export default {
    employeesLogin
}