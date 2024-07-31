export const validateAppointmentForm1 = (values) => {
  let errors = {};

  // Validar fecha de la cita
  if (!values.date) {
    errors.date = "Por favor ingresa la fecha de la cita";
  } else {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const selectedDate = new Date(values.date);


    if (selectedDate < currentDate) {
      errors.date = "La fecha debe ser posterior a la fecha actual";
    } else if (selectedDate.getDay() === 5 || selectedDate.getDay() === 6) {
      errors.date = "No se aceptan citas los sábados ni domingos";
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date)) {
      errors.date = "Por favor ingresa una fecha válida (formato YYYY-MM-DD)";
    } else if (selectedDate.getFullYear() < 2024 || selectedDate.getFullYear() > 2025) {
      errors.date = "Solo se pueden asignar citas para el año 2024 y 2025";
    }
  }

  // Validar hora
  if (!values.time) {
    errors.time = "Por favor ingresa la hora de la cita";
  }

  // Validar el formato de la hora (h o h:mm)
  const timeRegex = /^(\d{1,2})(:\d{2})?$/;
  const match = values.time.match(timeRegex);

  // console.log("Verificando formato", match);

  if (!match || match == null) {
    errors.time = "Formato de hora inválido. Usa el formato de hora (h) u horas y minutos (h:mm)";
  } else {
    // Convertir la hora a minutos desde la medianoche
    const hours = parseInt(match[1], 10);
    const minutes = match[2] ? parseInt(match[2].substring(1), 10) : 0;

    const totalMinutes = hours * 60 + minutes;
    const minTime = 8 * 60;  // 8:00 am en minutos
    const maxTime = 20 * 60; // 8:00 pm en minutos

    // Verificar si la hora está dentro del rango permitido
    if (totalMinutes < minTime || totalMinutes > maxTime) {
      errors.time = "La hora debe estar entre las 8:00 horas y las 20:00 horas";
    }
  }



  // Validar descripción
  if (!values.description) {
    errors.description = "Por favor ingresa una descripción para la cita";
  } else if (!/^[a-zA-Z\s]{1,100}$/.test(values.description)) {
    errors.description = "La descripción debe contener solo letras y tener máximo 100 caracteres";
  }

  return errors;
};
