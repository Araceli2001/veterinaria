export const validateRegistre1 = (form) => {
    let errors = {};
  
    // Validar nombre
    if (!form.name) {
      errors.name = "Por favor ingresa tu nombre";
    } else if (!/^[a-zA-Z\s]{2,40}$/.test(form.name)) {
      errors.name = "El nombre debe tener minimo 2 y 40 caracteres sin caracteres especiales";
    }
  
    // Validar email
    if (!form.email) {
      errors.email = "Por favor ingresa tu email";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Por favor ingresa un email válido";
    }
  
    // Validar fecha de nacimiento
    if (!form.birthdate) {
      errors.birthdate = "Por favor ingresa tu fecha de nacimiento";
    } else {
      const birthdate = new Date(form.birthdate);
      const currentYear = new Date().getFullYear();
      if (!(birthdate instanceof Date) || isNaN(birthdate) || birthdate.getFullYear() > (currentYear - 18) || birthdate.getFullYear() < 1900) {
        errors.birthdate = "Por favor ingresa una fecha de nacimiento válida (mayores de 18 años)";
      }
    }
  
    // Validar número de DNI
    if (!form.nDni) {
      errors.nDni = "Por favor ingresa tu número de DNI";
    } else if (!/^\d{8}$/.test(form.nDni)) {
      errors.nDni = "El número de DNI debe ser numérico y tener 8 caracteres sin caracteres especiales";
    }
  
    // Validar nombre de usuario
    if (!form.username) {
      errors.username = "Por favor ingresa un nombre de usuario";
    } else if (!/^[a-zA-Z]{5,10}$/.test(form.username)) {
      errors.username = "El username debe tener entre 5 y 10 caracteres y sin caracteres especiales ";
    }
  
    // Validar contraseña
    if (!form.password) {
      errors.password = "Por favor ingresa una contraseña";
    } else if (!/^\S{4,10}$/.test(form.password)) {
      errors.password = "La contraseña debe tener entre 4 y 10 caracteres alfanuméricos sin caracteres especiales";
    }
  
    // Validar confirmación de contraseña
    if (form.password !== form.passwordConfirm) {
      errors.passwordConfirm = "Las contraseñas no coinciden";
    }
  
    return errors;
  };
  