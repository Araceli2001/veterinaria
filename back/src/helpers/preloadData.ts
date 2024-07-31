import { EntityManager } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { query } from "express";
import { promises } from "dns";
import userRepository from "../repositories/userRepository";
import credentialRepository from "../repositories/credentialRepository";
import appointmentRepository from "../repositories/appointmentRepository";

const preloadUsers = [
{
   name: "franco",
   email: "franco@gmail.com",
   birthdate: "2001-01-01T00:00:00.000Z",
   nDni: 1900,
   username: "franco",
   password: "franco123"
},
{
    name: "mariana",
    email: "mariana@gmail.com",
    birthdate: "2001-01-01T00:00:00.000Z",
    nDni: 1900,
    username: "mariana",
    password: "mariana123"
 }
]

const preloadCredentials = 
[
    {
        username: "franco",
        password: "franco123"
    },
    {
        username: "mariana",
        password: "mariana123"
    }
]

const preloadAppointments = 
[
    {
        date: "2000-01-01T06:00:00.000Z",
        time:1,
        userId: 1,
        description: "limpieza bucal"
      },
      {
        date: "2000-03-01T06:00:00.000Z",
        time:1,
        userId: 1,
        description: "dolor de muela"
      },
      {
        date: "2000-03-01T06:00:00.000Z",
        time:1,
        userId: 2,
        description: "diente chueco"
      },
]
export const preloadData = async () => {
    try {
      await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
        const existingUsers = await userRepository.find();
        if (existingUsers.length) return console.log("NO se crearon usuarios porque ya existen.");
  
        // Guardar usuarios y credenciales dentro de la transacción
        for (let i = 0; i < preloadUsers.length; i++) {
          const user1 = preloadUsers[i];
          const credential1 = preloadCredentials[i];
  
          // Crear el usuario y la credencial correspondiente
          const newUser = await transactionalEntityManager.save(userRepository.create(user1));
          const newCredential = await transactionalEntityManager.save(credentialRepository.create(credential1));
  
          // Asociar la credencial recién creada con el usuario
          newUser.credential = newCredential;
          await transactionalEntityManager.save(newUser);
        }
  
        console.log("Se crearon usuarios y credenciales con éxito!!!");
  
        // Llamar a la función preloadAppointmentData dentro de la misma transacción: transactionalEntityManager
        await preloadAppointmentData();
  
        console.log("SI se realizó la precarga de datos con éxito!!!");
      });
    } catch (error) {
      console.error("Error durante la precarga de datos:", error);
    }
  };
  


  export const preloadAppointmentData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
  
    try {
      await queryRunner.startTransaction();
  
      for (const appointmentData of preloadAppointments) {
        const newAppointment = await appointmentRepository.create(appointmentData);
        
        const user = await userRepository.findOneBy({ id: appointmentData.userId });
        if (!user) {
          throw new Error(`Usuario con ID ${appointmentData.userId} no encontrado.`);
        }
  
        newAppointment.user = user;
  
        await queryRunner.manager.save(newAppointment);
      }
  
      console.log("Precarga de citas exitosa");
      await queryRunner.commitTransaction();
    } catch (error) {
      console.error("Error durante la precarga de citas:", error);
      await queryRunner.rollbackTransaction();
    } finally {
      console.log("Ha finalizado el proceso");
      await queryRunner.release();
    }
  };
  
  // export const preloadAppointmentData = async (transactionalEntityManager: EntityManager) => {
  //   try {
  //     const existingCitas = await appointmentBDDModel.find();
  //     if (existingCitas.length) return console.log("NO se crearon citas porque ya existen.");

  //     await AppDataSource.manager.transaction(async(transactionalEntityManager: EntityManager) => {
  //     // Recorrer las citas y asociarlas con los usuarios correspondientes
  //     for (const appointmentData of preloadAppointments) {
  //       const { userId, ...appointmentInfo } = appointmentData;
  
  //       // Buscar el usuario en la base de datos
  //       const user = await userBDDModel.findOne({ where: { id: userId } });
  //       if (!user) {
  //         console.error(`No se encontró el usuario con ID ${userId}`);
  //         continue; // Saltar esta cita si el usuario no existe
  //       }
  
  //       // Crear una nueva cita y asociarla con el usuario
  //       const newAppointment = appointmentBDDModel.create({
  //         ...appointmentInfo,
  //         user: user // Asociar la cita con el usuario
  //       });
  
  //       // Guardar la cita en la base de datos dentro de la transacción
  //       await transactionalEntityManager.save(newAppointment);
  
  //       console.log(`Cita creada con éxito: ${newAppointment.id}`);
  //     }
  //   });
  //     console.log("Se crearon citas con éxito!!!");
  //   } catch (error) {
  //     console.error("Error durante la creación de citas:", error);
  //     throw error;
  //   }
  // };
  //la anterior
  // export const  preloadAppointmentData = async () => {
  //   const queryRunner = AppDataSource.createQueryRunner();
  //   await queryRunner.connect();
  
  //   const promises = preloadAppointments.map(async(Appointment) => {
  //     const newAppointment = await appointmentBDDModel.create(Appointment)
  //     await queryRunner.manager.save(newAppointment);
  //     const user1 = await userBDDModel.findOneBy({id: Appointment.userId});
  
  //     if(!user1) throw Error("usuario no existe :(")
  //       newAppointment.user = user1;
  //     queryRunner.manager.save(newAppointment);
  
  //   });
  
  //   try {
  //     await queryRunner.startTransaction();
  //     await Promise.all(promises);
  //     console.log("precarga de citas con exito");
  //     await queryRunner.commitTransaction();
      
  //   } catch (error) {
  //     console.log("Error al al intentar crear citas !!")
  //     await queryRunner.rollbackTransaction();
  //   }finally {
  //     console.log("Ha finalizado el proceso");
  //     await queryRunner.release();
  //   }
    
  //  }
  