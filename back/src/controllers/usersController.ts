import { Request, Response } from "express";
import {createUserService, getAllUserSevice, getUserIdService} from "../services/usersService"

import { IUser } from "../interfaces/IUser";
import { IUserDto } from "../dtos/IUserDto";
import { User } from "../entities/User";
import { login } from "../services/credentialsService";
import { Credential } from "../entities/Credential";


//users = Request y Response debe de ser de  tipo express 
export const getAllUsers = async (req:Request, res:Response) => {
    try {
        const users: User[] = await getAllUserSevice();
        res.status(200).json(users);  
    } catch (error:any) {
        res.status(400).json({message: error.message});
    }

};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const byId = await getUserIdService(Number(id));
      
            res.status(200).json(byId);
       
    } catch (error:any) {
        res.status(400).json({ message: "error al pedir id" });
    }
};


export const createUser = async (req:Request, res:Response) => {
    try {
        const {name, email, username, password,birthdate, nDni}: IUserDto = req.body;
        const user: User = await createUserService({name, email, username, password,birthdate, nDni});
        if (user) {
            res.status(200).json(user);
        } 
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req:Request, res:Response) => {
    try{
  
        const {username, password}= req.body;
        const credencialLogin: Credential | null = await login({username, password})
        const user = await getUserIdService(credencialLogin.id )
        res.status(200).json({login: true, user})
    
      } catch(error: any){
        res.status(400).json({error: "usuaruio o contraseña son incorrectas" })
      }
}



// export const deleteUser = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const deleteId = await deleteUserService(Number(id));
      
//             res.status(200).json(deleteId);
       
//     } catch (error:any) {
//         res.status(400).json({ "error al eliminar user" :error.message });
//     }
// };





