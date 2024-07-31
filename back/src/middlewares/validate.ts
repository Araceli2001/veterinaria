import { NextFunction, Request, Response } from "express";


function validateUserData(req:Request, res:Response, next:NextFunction) {
    const { name, email, birthdate, nDni, username, password } = req.body;

    // Validar que el nombre no contenga caracteres especiales
    const caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/;
    if (caracteresEspeciales.test(name)) {
        return res.status(400).json({ error: 'El nombre no puede contener caracteres especiales.' });
    }

    // Validar que nDni solo contenga números
    if (isNaN(nDni)) {
        return res.status(400).json({ error: 'El número de DNI debe contener solo números.' });
    }

    // Validar que la fecha de nacimiento sea válida
    const birthdateDate = new Date(birthdate);

    // Validar que la fecha de nacimiento sea válida
    const fechaActual = new Date();
    if (isNaN(birthdateDate.getTime()) || birthdateDate >= fechaActual || birthdateDate.getFullYear() > 2025) {
        return res.status(400).json({ error: 'La fecha de nacimiento no es válida.' });
    }


    // Validar que el email tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'El email no tiene un formato válido.' });
    }

    // Si todos los datos son válidos, continuar con la ejecución
    next();
}

export default validateUserData;