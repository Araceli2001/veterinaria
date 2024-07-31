import {Router} from "express";
import { getAllAppointments, getAppointment, scheduleAppointment, cancelAppointment } from "../controllers/appointmentsController";
import validateAppointment from "../middlewares/validateAppointment";
const routerAppointment: Router = Router();


//appointments-----
//Obtener el listado de todos los turnos de todos los usuarios.
routerAppointment.get("/appointments", getAllAppointments);
// Obtener el detalle de un turno específico.
routerAppointment.get("/appointment/:id", getAppointment);

//Agendar un nuevo turno.
routerAppointment.post("/appointment/schedule", validateAppointment, scheduleAppointment);
//Cambiar el estatus de un turno a “cancelled”.
routerAppointment.put("/appointment/cancel/:id", cancelAppointment);




export default routerAppointment;