import {Formik, Field, Form, ErrorMessage} from 'formik';
import { validateRegistre1 } from "../../helpers/validateRegistre";
import styles from './Registre.module.css'
import { postRegisterUser } from '../../helpers';

const Register = () => {
  const handleSubmit = async (values, actions) => {
    try {
      await postRegisterUser(values); // Pasar los valores del formulario al backend
      alert('REGISTRO EXITOSO')
      actions.resetForm(); // Restablecer el formulario después de un registro exitoso
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };
  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await axios.post("http://localhost:3000/users/register", values);
  //     console.log("Registro exitoso");
  //   } catch (error) {
  //     console.error("Error en el registro:", error);
  //   }
  // };

  function FormikRegister(){
    return(
      <Formik
        initialValues={{name: '',
          email: '',
          birthdate: '',
          nDni: '',
          username: '',
          password: '',
          passwordConfirm: ''
        }}
        validate={validateRegistre1}
        onSubmit={handleSubmit}
      >
      <Form>
        <div className={styles.registerform}>
          <div className={styles.formgroup}>
            <label htmlFor="name">Nombre:</label>
            <Field type="text" id="name" name="name" placeholder="Nombre" />
            <ErrorMessage name="name" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="birthdate">Fecha de Nacimiento:</label>
            <Field type="date" id="birthdate" name="birthdate" placeholder="Fecha de Nacimiento" />
            <ErrorMessage name="birthdate" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="nDni">Número de DNI:</label>
            <Field type="text" id="nDni" name="nDni" placeholder="Número de DNI" />
            <ErrorMessage name="nDni" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="username">Nombre de Usuario:</label>
            <Field type="text" id="username" name="username" placeholder="Nombre de usuario" />
            <ErrorMessage name="username" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="password">Contraseña:</label>
            <Field type="password" id="password" name="password" placeholder="Contraseña" />
            <ErrorMessage name="password" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="passwordConfirm">Confirmar Contraseña:</label>
            <Field type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirmar Contraseña" />
            <ErrorMessage name="passwordConfirm" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
          </div>

          <button type="submit" className={styles.button}>Registrarse</button>
        </div>
      </Form>
      </Formik>
    )
  }
  
  return (
    <div>
      <h1>Registro</h1>
      <FormikRegister />
    </div>
  );
};

export default Register;





// import axios from "axios";
// import { useState } from 'react';
// import {Formik, Field, Form, ErrorMessage} from 'formik';
// import { validateRegistre1 } from "../../helpers/validateRegistre";
// import styles from './Registre.module.css'

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     birthdate: "",
//     nDni: "",
//     username: "",
//     password: "",
//     passwordConfirm: ""
//   });

//   // Agrega el estado para los errores
//   const [errors, setErrors] = useState({

//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value });

//     // setErrors(validateRegistre1(form))
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Validar el formulario
//       const validationErrors = validateRegistre1(form);
  
//       if (Object.keys(validationErrors).length === 0) {
//         // Petición al servidor si no hay errores
//         const response = await axios.post("http://localhost:3000/users/register", form);
        
//         // Registro exitoso
//         console.log("Registro exitoso");
//       } else {
//         // Establecer los errores
//         setErrors(validationErrors);
//       }
//     } catch (error) {
//       // Error en la petición
//       console.error("Error en el registro:", error);
//     }
//   };
  
//   return (
//     <form className={styles.registerform} onSubmit={handleSubmit}>
//       {/* Mostrar errores debajo de cada campo */}
//       <div className={styles.formgroup}>
//         <label htmlFor="name">Nombre:</label>
//         <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
//         {errors.name && <span className={styles.errormessage}>{errors.name}</span>}
//       </div>
      
//       <div className={styles.formgroup}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
//         {errors.email && <span className={styles.errormessage}>{errors.email}</span>}
//       </div>

//       <div className={styles.formgroup}>
//         <label htmlFor="birthdate">Fecha de Nacimiento:</label>
//         <input type="date" id="birthdate" name="birthdate" value={form.birthdate} onChange={handleChange} placeholder="Fecha de Nacimiento" />
//         {errors.birthdate && <span className={styles.errormessage}>{errors.birthdate}</span>}
//       </div>

      
//       <div className={styles.formgroup}>
//         <label htmlFor="nDni">Número de DNI:</label>
//         <input type="text" id="nDni" name="nDni" value={form.nDni} onChange={handleChange} placeholder="Número de DNI" />
//         {errors.nDni && <span className={styles.errormessage}>{errors.nDni}</span>}
//       </div>

//       <div className={styles.formgroup}>
//         <label htmlFor="username">Nombre de Usuario:</label>
//         <input type="text" id="username" name="username" value={form.username} onChange={handleChange} placeholder="Nombre de usuario" />
//         {errors.username && <span className={styles.errormessage}>{errors.username}</span>}
//       </div>

//       <div className={styles.formgroup}>
//         <label htmlFor="password">Contraseña:</label>
//         <input type="password" id="password" name="password" value={form.password} onChange={handleChange} placeholder="Contraseña" />
//         {errors.password && <span className={styles.errormessage}>{errors.password}</span>}
//       </div>

//       <div className={styles.formgroup}>
//         <label htmlFor="passwordConfirm">Confirmar Contraseña:</label>
//         <input type="password" id="passwordConfirm" name="passwordConfirm" value={form.passwordConfirm} onChange={handleChange} placeholder="Confirmar Contraseña" />
//         {errors.passwordConfirm && <span className={styles.errormessage}>{errors.passwordConfirm}</span>}
//       </div>

//       <button type="submit">Registrarse</button>
//     </form>
//   );

// };

// export default Register;
