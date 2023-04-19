import { Polos } from "../models/polos.model"
import { Unidades } from "../models/unidades.model"
import { Usuarios } from "../models/users.model"

type DataTypes = {
    name: string
    cpf: string
    rank_level: string
    unidade: number
    polo: number
    data: Date
    horario: string
}
export const getAllAppointments = async () => {
    const response = await Usuarios.findAll({include: [Polos, Unidades], order:[['polos_id', 'ASC'], ['date','ASC']]})
    return response
}
export const registerSchedules = async (data: DataTypes) => {

}