import { query } from "express";
import { AppDataSource } from "../config/data-source";
import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";
import appointmentRepository from "../repositories/appointmentRepository";
import userRepository from "../repositories/userRepository";



//////////////////////////1
export const getAllAppointmentsService = async (): Promise<Appointment[]> => { 
    const appointments = await appointmentRepository.find();
    const appointmentsKeep = await appointmentRepository.save(appointments);
    return appointments
};



//////////////////////////2
export const getAppointmentIdService= async (id:number): Promise<Appointment | null> => { 
    const appointment1  = await appointmentRepository.findOneBy({id})
    return appointment1
};


//////////////////////////3
export const createAppointmentService = async (appointmentData: IAppointmentDto): Promise<Appointment | undefined > => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
         queryRunner.startTransaction();

        // Crear una nueva instancia de Appointment con los datos proporcionados
        const newAppointment = await appointmentRepository.create(appointmentData);
        await queryRunner.manager.save(newAppointment)
        // Encontrar el usuario correspondiente en la base de datos
        const user = await userRepository.findOneBy({ id: appointmentData.userId } );
        if (!user) {
            throw  Error("Usuario inexistente, no se puede crear la cita.");
        }

        // Asignar el usuario a la cita
        newAppointment.user = user;

        // Guardar el nuevo objeto Appointment en la base de datos dentro de la transacción
        await queryRunner.manager.save(newAppointment);

        // Confirmar la transacción
        await queryRunner.commitTransaction();

        return newAppointment;

    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw Error ("Error durante la creación de la cita.");
    } finally {
        await queryRunner.release();
    }
}





// export const createAppointmentService= async (appointmentData: IAppointmentDto): Promise<Appointment> => { 
//     // Validar datos de entrada
//     if (!appointmentData.userId || !appointmentData.date || !appointmentData.time) {
//         throw new Error("El ID de usuario, la fecha y la hora son obligatorios para crear un turno");
//     }

//     // Verificar si el usuario existe
//     const user: User | null = await getUserIdService(appointmentData.userId);
//     if (!user) {
//         throw new Error("El ID de usuario especificado no existe");
//     }

//     // Crear el nuevo turno
//     const newAppointment: Appointment = new Appointment();
//     newAppointment.status = "Active";
//     newAppointment.date = appointmentData.date;
//     newAppointment.time = appointmentData.time;
//     newAppointment.description = appointmentData.description;
//     newAppointment.user = user;

//     // Guardar el nuevo turno en la base de datos
//     try {
//         await AppDataSource.manager.save(newAppointment);
//     } catch (error:any) {
//         throw new Error("Error al guardar el nuevo turno en la base de datos: " + error.message);
//     }

//     return newAppointment;
// };


//////////////////////////4
export const cancelAppointmentService = async (id:number) : Promise<Appointment |undefined> => { 
    const appointmentCancel = await appointmentRepository.findOneBy({id: id});
    if(appointmentCancel) {
        appointmentCancel.status = "Cancelled";

     await AppDataSource.manager.save(appointmentCancel) 
     return appointmentCancel;
    } else {
        throw new Error (`No se encontro ningun usuario con ese ID `)
    }
    
}; 
