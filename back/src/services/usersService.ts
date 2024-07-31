import { IUser } from "../interfaces/IUser";
import {createCredentialService} from "../services/credentialsService"
import { IUserDto } from "../dtos/IUserDto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import userRepository from "../repositories/userRepository";


// let arrayUser: IUser[] = [
//     { id: 1, name: "araceli", email: "araceli@gmail.com", birthdate: new Date(1980, 0, 1), nDni: 2001, credentialsId:4545 },
//     { id: 2, name: "laura", email: "laura@example.com", birthdate: new Date(1995, 5, 15), nDni: 671, credentialsId:9045},
// ];

export const getAllUserSevice = async (): Promise<User[]> => {
    const users = await userRepository.find({
        relations: {
            credential: true
        }
    });
    const keep = await userRepository.save(users);



    return users;
}


//Retornar un elemento x su ID
//CUALQUIER COMUNICACION CON LA BASE DE DATOS DEBE SER
export const getUserIdService = async (id:number): Promise<User | null> => {
    const user : User | null = await userRepository.findOne({where: {id}, relations:['appointment']})
    if(!user) throw Error("usuario no exite")
        return user
    // const getId = await userBDDModel.findOneBy({id})
    // return getId;
}
// export const getUserIdService = async (id:number) : Promise<IUser | undefined> => {
//     const user1: IUser | undefined = arrayUser.find((userId: IUser) => userId.id === id);
//     return user1;
// }



export const createUserService = async (userData: IUserDto): Promise<User> => {
    try {
        // Llamar a la función createCredentialService para crear las credenciales
        const newCredentialData: Credential = await createCredentialService({
            username: userData.username,
            password: userData.password
        });

        // Crear un nuevo usuario en la base de datos utilizando el modelo userBDDModel
        const newUser: User = new User();
        newUser.name = userData.name;
        newUser.email = userData.email;
        newUser.birthdate = userData.birthdate;
        newUser.nDni = userData.nDni;
        newUser.credential = newCredentialData;

        // Guardar el nuevo usuario en la base de datos
        await AppDataSource.manager.save(newUser);

        return newUser;
    } catch (error: any) {
        // Manejar cualquier error que ocurra durante la creación del usuario
        throw new Error('Error creating user: ' + error.message);
    }
};



// export const createUserService = async (userData: IUserDto): Promise<IUser> => {
//     // Llamar a la función createCredentialService para crear las credenciales
//     const newCredentialData = {
//         username: userData.username, 
//         password: userData.password 
//     };

   
//     const credentialsId: number = await createCredentialService(newCredentialData);

//     // Crear un nuevo usuario con el ID de las credenciales
//     const newUser: IUser = {
//         id: arrayUser.length + 1, // Generar un nuevo ID para el usuario
//         name: userData.name,
//         email: userData.email,
//         birthdate: userData.birthdate,
//         nDni: userData.nDni,
//         credentialsId: credentialsId // Asignar el ID de las credenciales al nuevo usuario
//     };

//     // Agregar el nuevo usuario al arreglo de usuarios
//     arrayUser.push(newUser);

//     return newUser;
// }

// export const deleteUserService = async (id: number): Promise<User | void> => {
//     try {
//         // Intenta encontrar el usuario por su ID
//         const userToDelete = await userBDDModel.findOne({where: {id}});

//         // Si el usuario no existe, lanza un error
//         if (!userToDelete) {
//             throw new Error(`No se encontró ningún usuario con el ID ${id}`);
//         }

//         // Elimina el usuario de la base de datos
//         const deleteResult: DeleteResult = await userBDDModel.delete(id);

//         // Verifica si el usuario fue eliminado correctamente
//         if (deleteResult.affected === 0) {
//             throw new Error(`No se pudo eliminar el usuario con el ID ${id}`);
//         }
//     } catch (error: any) {
//         // Maneja cualquier error que ocurra durante el proceso de eliminación
//         throw new Error(`Error al eliminar el usuario: ${error.message}`);
//     }
// };