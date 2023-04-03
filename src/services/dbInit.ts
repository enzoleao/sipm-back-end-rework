import users  from '../models/usuarios.model'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    users.sync({ alter: isDev })
}
export default dbInit 