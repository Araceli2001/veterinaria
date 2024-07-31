import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCreateAppointment } from "../../helpers";
import { setUserAppointments } from '../../redux/reducer';
import { validateAppointmentForm1 } from "../../helpers/validateAppointment";
import styles from '../Register/Registre.module.css';

const CreateAppointmentForm = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(state => state.user.userAppointments);
  const user = useSelector(state => state.user.user);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    if (user) {
      setUserId(user.id);
    }
  }, [user]);

  const handleOnSubmit = async (values, actions) => {
    try {
      const timeParts = values.time.split(':');
      const hours = parseInt(timeParts[0], 10);
      const appointmentData = { ...values, time: hours, userId };
      await postCreateAppointment(appointmentData); 
      alert('CITA CREADA CON EXITO')
       actions.resetForm(); 

      // Despachar la acción para actualizar las citas del usuario en Redux
      dispatch(setUserAppointments([...appointments, appointmentData]));
    } catch (error) {
      console.error("Error al crear cita:", error);
    }
  };

  function FormikAppointment(){
    return(
      <Formik
        initialValues={{ date: '', time: '', description: '' }}
        validate={validateAppointmentForm1} 
        onSubmit={handleOnSubmit}
      >
        <Form>
          <div className={styles.registerform}>
            <div className={styles.formgroup}>
              <label htmlFor="date">Fecha de la cita:</label>
              <Field type="date" id="date" name="date" placeholder="14/07/2024" />
              <ErrorMessage name="date" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
            </div>
    
            <div className={styles.formgroup}>
              <label htmlFor="time">Hora:</label>
              <Field type="string" id="time" name="time" placeholder="14:00" />
              <ErrorMessage name="time" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
            </div>
  
            <div className={styles.formgroup}>
              <label htmlFor="description">Descripción de la cita:</label>
              <Field as="textarea" id="description" name="description" className={styles.textarea} style={{ resize: "none" }}/>
              <ErrorMessage name="description">{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
            </div>
    
            <button type="submit">Crear cita</button>
          </div>
        </Form>
      </Formik>
    )
  }
  
  return (
    <div>
      <h1>CREAR APPOINTMENTS</h1>
      <h3>Recuerda que nuestro horario de atencion es de 8:00 am a 20:00pm </h3>
      <FormikAppointment />
    </div>
  );
};

export default CreateAppointmentForm;



// import {Formik, Field, Form, ErrorMessage} from 'formik';
// import { validateAppointment1 } from "../../helpers/validateAppointment";
// import styles from '../Register/Registre.module.css'
// import { postCreateAppointment } from "../../helpers";
// import { useEffect, useState } from 'react';

// const CreateAppointmentForm = () => {
//   const [userId, setUserId] = useState(0);

//   useEffect(() => {

//     const dataUser = JSON.parse(localStorage.getItem("userData"));
//     if(dataUser){
//       setUserId(dataUser.id)
//     }
     
//     console.log(dataUser, 'datos del user');
    
//     }, []);
//     const handleOnSubmit = async (values, actions) => {
//       try {
//         const appointmentData = {...values, userId}
//         await postCreateAppointment(appointmentData); 
//         console.log("cita creada con exitoso");
//         actions.resetForm(); 
//       } catch (error) {
//         console.error("Error al crear cita:", error);
//       }
//     };
//   // const handleOnSubmit = async (values, actions) => {
//   //   console.log('entrando al try')
//   //   try {
//   //     const response = await postCreateAppointment(values)
//   //     console.log("Respuesta de la cita", response);
//   //     console.log("cita creada con exitoso");
//   //     actions.resetForm(); 
//   //   } catch (error) {
//   //     console.error("Error al crear cita:", error);
//   //   }
//   // };

    
//     function FormikAppointment(){
//         return(
//           <Formik
//             initialValues={{date: '', time: '', description:''}}
//             // validate={validateAppointment1}
//             onSubmit={handleOnSubmit}
//           >
//           <Form>
//             <div className={styles.registerform}>

//             <div className={styles.formgroup}>
//                 <label htmlFor="date">Fecha de la cita:</label>
//                 <Field type="date" id="date" name="date" placeholder="14/07/2024" />
//                 <ErrorMessage name="date" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
//             </div>
    
//             <div className={styles.formgroup}>
//                 <label htmlFor="time">Hora:</label>
//                 <Field type="number" id="time" name="time" placeholder="2:00" />
//                 <ErrorMessage name="time" >{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
//              </div>

//             <div className={styles.formgroup}>
//                 <label htmlFor="description">Descripción de la cita:</label>
//                 <Field as="textarea" id="description" name="description" className={styles.textarea} style={{ resize: "none" }}/>
//                 <ErrorMessage name="description">{msg => <span className={styles.errormessage}>{msg}</span>}</ErrorMessage>
//             </div>
//             {/* <Field type="hidden" name="userId" value={userId}/> */}

    
//               <button type="submit">Crear cita</button>
//             </div>
//           </Form>
//           </Formik>
//         )
//       }
      
//       return (
//         <div>
//           <h1>CREAR APPOINTMENTS</h1>
//           <FormikAppointment />
//         </div>
//       );


// };

// export default CreateAppointmentForm;