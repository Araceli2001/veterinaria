import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

const appointmentRepository = AppDataSource.getRepository(Appointment);
export default appointmentRepository;