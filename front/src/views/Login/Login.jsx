import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser, setUserAppointments } from '../../redux/reducer'; // Ajusta la ruta según tu estructura
import { validateLogin1 } from "../../helpers/validateLogin";
import styles from '../Register/Registre.module.css';
import { posLogintUser, getIdUser } from '../../helpers';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.user.user !== null);
  const userAppointments = useSelector(state => state.user.userAppointments);

  // useEffect(() => {
  //   const data = window.localStorage.getItem("userData");
  //   console.log("Carga useEffect:");
  //     console.log(data );

  //   if (data) {
  //     const userData = JSON.parse(data);

  //     console.log("userData de useEffect");
  //     console.log(userData);

  //     dispatch(setUser(userData));
  //     const userAppointments = userData.appointment;


  //     console.log("userData de userAppointments");
  //     console.log(userAppointments);

  //     dispatch(setUserAppointments(userAppointments));

  //     // navigate('/myAppointments');
      
  //   }
  // }, [dispatch, navigate]);

  // const handleOnSubmit = async (values, actions) => {
  //   try {
  //     const response = await posLogintUser(values);
  //     const userId = response.user.id;
  //     window.localStorage.setItem("userData", JSON.stringify(response.user));
  //     const userAppointments = response.user.appointment;
  //     dispatch(setUser(response.user));
  //     dispatch(setUserAppointments(userAppointments));

  //     console.log("Checando si se guarda el usuario:");
  //     console.log(response.user );
  //     console.log(userAppointments);

  //     actions.resetForm();

  //     // useEffect();

  //     navigate('/myAppointments');
  //   } catch (error) {
  //     console.error("Error en el Login:", error);
  //   }
  // };

  const handleOnSubmit = async (values, actions) => {
    try {
      const response = await posLogintUser(values);
      const userId = response.user.id;
      
      // Dispatch actions to set user and appointments in Redux
      dispatch(setUser(response.user));
      dispatch(setUserAppointments(response.user.appointment));
  
      actions.resetForm();
  
      navigate('/myAppointments');
    } catch (error) {

      if (error.response && error.response.status === 400) {
        alert("Las credenciales proporcionadas son incorrectas. Por favor, inténtalo de nuevo.");
      } else {
        console.error("Error al enviar el formulario:", error);
        // Mostrar un mensaje de error genérico al usuario
        alert("Se ha producido un error inesperado. Por favor, inténtalo de nuevo más tarde.");
      }

    }
  };
  

  const handleLogout = () => {
    dispatch(setUser(null));
    dispatch(setUserAppointments([]));
    // window.localStorage.removeItem("userData");
    window.location.replace("/login");
  };

  function FormikLogin() {
    return (
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={validateLogin1}
        onSubmit={handleOnSubmit}
      >
        <Form>
        <h1>LOGIN</h1>
          <div className={styles.registerform}>
            <div className={styles.formgroup}>
              <label htmlFor="username">Nombre de Usuario:</label>
              <Field type="text" id="username" name="username" placeholder="Nombre de usuario" />
              <ErrorMessage name="username">{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="password">Contraseña:</label>
              <Field type="password" id="password" name="password" placeholder="Contraseña" />
              <ErrorMessage name="password">{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
            </div>

            <button type="submit" className={styles.button}>Iniciar sesión</button>
          </div>
        </Form>
      </Formik>
    );
  }

  return (
    <div>
      
      {isAuthenticated ? (
        <div>
          <button onClick={handleLogout} className={styles.button}>Cerrar sesión</button>
          {userAppointments.length > 0 && (
            <div>
              
              {/* <ul>
                {userAppointments.map((appointment, index) => (
                  <li key={index}>{appointment.details}</li>
                ))}
              </ul> */}
            </div>
          )}
        </div>
      ) : (
        <FormikLogin />
      )}
    </div>
  );
};

export default Login;
