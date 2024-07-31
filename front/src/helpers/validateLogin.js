export const validateLogin1 = (form) => {
    let errors = {};

        // Validar nombre de usuario
        if (!form.username) {
            errors.username = "Por favor ingresa su nombre de usuario";
          } else if (!/^[a-zA-Z]{5,10}$/.test(form.username)) {
            errors.username = "Coloque el username con el que se registro";
          }
        
          // Validar contraseña
          if (!form.password) {
            errors.password = "Por favor ingresa la contraseña";
          } else if (!/^\S{4,10}$/.test(form.password)) {
            errors.password = "Coloque la contraseña con la que se registro";
          }
    return errors;
}