import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppointmentCard from "../../components/Appointment/AppointmentCard";
import { getIdUser, putCancelAppointment } from "../../helpers";
import { setUser, setUserAppointments } from '../../redux/reducer'; 

const MyAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);
  const appointments = useSelector(state => state.user.userAppointments);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const userId = user.id;
          const res = await getIdUser(userId);
          dispatch(setUserAppointments(res.appointment));
        } else {
          navigate('/myAppointments');
        }
      } catch (error) {
        console.error("Error en la carga inicial:", error);
      }
    };

    fetchUserData();
  }, [user, dispatch, navigate]);

  const cancelAppointment = async (id) => {
    const isConfirmed = window.confirm("¿Estás seguro que deseas cancelar esta cita?");
    if (isConfirmed) {
      try {
        await putCancelAppointment(id);
        dispatch(setUserAppointments(
          appointments.map(appointment =>
            appointment.id === id ? { ...appointment, status: "Cancelled" } : appointment
          )
        ));
      } catch (error) {
        console.error("Error al cancelar la cita:", error);
      }
    }
  };

  return (
    <>
      <h2>Mis citas actuales</h2>
      <div>
        {!appointments.length ? (
          <div>
            <p>Usted no tiene citas agendadas</p>
          </div>
        ) : (
          appointments.map((appointment) =>  (
            <AppointmentCard
              key={appointment.id}
              id={appointment.id}
              date={appointment.date}
              time={appointment.time}
              description={appointment.description}
              status={appointment.status}
              onCancel={() => cancelAppointment(appointment.id)}
              isLoggedIn={true}
            />
          ))
        )}
      </div>
    </>
  );
};

export default MyAppointments;


// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import AppointmentCard from "../../components/Appointment/AppointmentCard";
// import { getIdUser, putCancelAppointment } from "../../helpers";
// import { setUser, setUserAppointments } from '../../redux/reducer'; 


// const MyAppointments = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector(state => state.user.user);
//   const appointments = useSelector(state => state.user.userAppointments);
//   const isAuthenticated = useSelector(state => state.user.user !== null);

//   useEffect(() => {
//     const data = window.localStorage.getItem("userData");
//     console.log("Carga useEffect:");
//       console.log(data );

//     if (data) {
//       const userData = JSON.parse(data);

//       console.log("userData de useEffect");
//       console.log(userData);

//       dispatch(setUser(userData));

//       //Esto llama al fetch de la base de datos
//       const userId = userData.id;
//       getIdUser(userId)
//         .then((res) => {
//             console.log("llamamos a la DB, para actualizar citas");
//             console.log(res);
//             console.log(res.appointment);
//           dispatch(setUserAppointments(res.appointment));
//         })
//         .catch((err) => console.error(err));
//     }

//       //Esto es local


//     //   const userAppointments = userData.appointment;


//     //   console.log("userData de userAppointments");
//     //   console.log(userAppointments);

//     //   dispatch(setUserAppointments(userAppointments));

      
    
//   }, [dispatch, navigate]);


//   useEffect(() => {
//     if (!user) {
//       navigate('/myAppointments');
//     } else {
//       const userId = user.id;
//       getIdUser(userId)
//         .then((res) => {
//           dispatch(setUserAppointments(res.appointment));
//         })
//         .catch((err) => console.error(err));
//     }
//   }, [user, dispatch, navigate]);

//   const cancelAppointment = async (id) => {

//     const isConfirmed = window.confirm("¿Estás seguro que deseas cancelar esta cita?");
//     if (isConfirmed) {
//       try {
//         await putCancelAppointment(id);
//         dispatch(setUserAppointments(
//             appointments.map(appointment =>
//             appointment.id === id ? { ...appointment, status: "Cancelled" } : appointment
//           )
//         ));
//       } catch (error) {
//         console.error("Error al cancelar la cita:", error);
//       }
//     }
//   };

//   return (
//     <>
//       <h2>Mis turnos</h2>
//       <div>
//         {
//           !appointments.length ? (
//             <div>
//               <p>Usted no tiene citas agendadas</p>
//             </div>
//           ) : (
//             appointments.map((appointment) =>  (<AppointmentCard
//                 key={appointment.id}
//                 id={appointment.id}
//                 date={appointment.date}
//                 time={appointment.time}
//                 description={appointment.description}
//                 status={appointment.status}
//                 onCancel={() => cancelAppointment(appointment.id)}
//                 isLoggedIn={true}
//               />)
//             )
//           )
//         }
//       </div>
//     </>
//   );
// };

// export default MyAppointments;
