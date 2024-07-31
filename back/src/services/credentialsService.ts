import { AppDataSource } from "../config/data-source";
import { ICredentialDto } from "../dtos/ICredentialsDto";
import { Credential } from "../entities/Credential";
import { ICredential } from "../interfaces/ICredential";
import credentialRepository from "../repositories/credentialRepository";


let accessArray: ICredential[] = [];
let id:number = 1;

export const createCredentialService = async (credentialData:ICredentialDto): Promise<Credential> => {
    const newCredential = {
        id: id++,
        username: credentialData.username,
        password: credentialData.password
    };
    const newTurn = credentialRepository.create(newCredential);
     await credentialRepository.save(newTurn);

    //  const userTurn = await userBDDModel.findOneBy({id })
    return newCredential;
}

// export const createCredentialService = async (credentialData:ICredentialDto): Promise<number> => {
//     const newCredential: ICredential = {
//         id: id++,
//         username: credentialData.username,
//         password: credentialData.password
//     };

//     accessArray.push(newCredential);
//     return newCredential.id;
// }

// const newCredentialData: ICredential = {
//     id: 1,
//     username: "araceli",
//     password: "password"
// };

// createCredentialService(newCredentialData)
//     .then(resultado1 => {
//         console.log("Se ha creado un nuevo par de credenciales con ID:", resultado1);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });




//******* FUNCTION 2 checar ID
export const login = async (credentialData:ICredentialDto): Promise<Credential> => { 

    const {username, password} = credentialData;
    const  foundCredentials: Credential| null = await AppDataSource.getRepository(Credential).findOneBy({username})
    if(!foundCredentials) throw Error("Usuario no existe ")
    if(password != foundCredentials?.password) throw Error("Contraseña incorrecta")
    return foundCredentials
}
// export const login = async (username:string, password:string): Promise<number | null> => { 

//    const Credential1 = accessArray.find(acceso => acceso.username === username);

//    if (!Credential1) {
//         return null;        
//     }

//     if (Credential1.password === password) {
//         return Credential1.id;
//     } 

//     return null;
// }

// const userId = login("araceli", "password");
// if (userId !== null) {
//     console.log("La validación exitosa. ID de las credenciales:", userId);
// } else {
//     console.log("Nombre de usuario o contraseña incorrectos.");
// }


