import { Polos } from "../models/polos.model"
import { Unidades } from "../models/unidades.model"
import { Usuarios } from "../models/users.model"

export const getAllAppointments = async () => {
    const response = await Usuarios.findAll({include: [Polos, Unidades], order:[['polos_id', 'ASC'], ['date','ASC']]})
    return response
}