
import dotenv from 'dotenv'

//Se cargan en la variable global process.env los valores del archivo .env
dotenv.config()

const ENVIROMENT = {
    PORT: process.env.PORT || 3000,
    SECRET_KEY_JWT: process.env.JWT_SECRET
}

export default ENVIROMENT