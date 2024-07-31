import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentsService";
import { IAppointment } from "../interfaces/IAppointment";
import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req:Request, res:Response) => {
    try {
        const appointment: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(appointment);
    } catch (error:any) {
        res.status(400).json({message: error.message});
    }
    // res.send('Obtener el listado de todos las citas');
};

export const getAppointment = async (req:Request, res:Response) => {
    try {
        const{id} = req.params;
        const appointmentById = await getAppointmentIdService(Number(id));
            res.status(200).json(appointmentById);
   
    } catch (error:any) {
        res.status(400).json({ message: "no se pudo obtener el id de user" });
    }
    // res.send('Obtener un turno de cita');
};

//programar cita
export const scheduleAppointment = async (req:Request, res:Response) => {
    try {
       const {date,time,userId,description}: IAppointmentDto = req.body;
        const turn: Appointment | undefined = await createAppointmentService({date,time,userId,description});
        if (turn) {
            res.status(200).json(turn);
        }

    } catch (error:any) {
        res.status(400).json({ message: "No se pudo crear la cita :(" });
    }


    // res.send('agendar turno');
};


export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
 
        // Validar que id sea un número
        const appointmentId = Number(id);
        if (isNaN(appointmentId)) {
            return res.status(400).json({ message: 'El ID de la cita debe ser un número válido' });
        }

        const result = await cancelAppointmentService(appointmentId);
 
        if (result === undefined ) {
            // Si hay un error en el servicio se devolvera un error 404
            return res.status(404).json({ message: 'No se encontró la cita con ese ID' });
        } else {

            return res.status(200).json(result);
        }
    } catch (error: any) {
        // Manejar cualquier otro error
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}; 

