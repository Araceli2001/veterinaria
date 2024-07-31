import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { Appointment } from "../entities/Appointment"
import {BD_DATABASE, BD_HOST, BD_PASSWORD, BD_PORT, BD_USERNAME} from '../config/envs'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: BD_HOST,
    port: Number(BD_PORT),
    username: BD_USERNAME,
    password: BD_PASSWORD,
    database: BD_DATABASE,
    //dropSchema: true, //borrar datos de la base de datos
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})

// export const userBDDModel = AppDataSource.getRepository(User);
// export const appointmentBDDModel = AppDataSource.getRepository(Appointment);
// export const credentialBDDModel = AppDataSource.getRepository(Credential);