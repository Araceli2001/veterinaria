import { NextFunction, Request, Response } from "express";

function validateAppointment(req:Request, res:Response, next:NextFunction) {
 
    const { date, time, userId, description } = req.body;

    // Verificar que se proporcionen todos los campos
    if (!date || !time || !userId || !description) {
        return res.status(400).json({ error: 'Faltan datos obligatorios.' });
    }

   // Verificar el tipo de dato y rango de valores para la fecha
    const fechaActual = new Date(date);
        if (isNaN(fechaActual.getTime())) {
        return res.status(400).json({ error: 'La fecha proporcionada no es válida.' });
    }

    // Verificar si la cita es para un día laborable (lunes a viernes)

    const dayOfWeek = fechaActual.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) { // 6 es Domingo, 5 es Sábado
        return res.status(400).json({ error: 'Los sábados y domingos no están disponibles para programar citas.' });
    }
    // Verificar si la cita es para un día después del actual
    const today = new Date();
    today.setDate(today.getDate() + 1); // Sumar un día al día actual
    if (fechaActual < today) {
        return res.status(400).json({ error: 'La cita debe programarse para un día después del actual.' });
    }


    if (typeof time !== 'number' || time < 0 || time > 24) {
        return res.status(400).json({ error: 'La hora proporcionada no es válida.' });
    }

    if (typeof userId !== 'number' || userId <= 0) {
        return res.status(400).json({ error: 'El ID de usuario proporcionado no es válido.' });
    }

    if (typeof description !== 'string' || description.trim() === '') {
        return res.status(400).json({ error: 'La descripción proporcionada no es válida.' });
    }

    // Si todos los datos son válidos, continuar con la ejecución
    next();

}


export default validateAppointment;