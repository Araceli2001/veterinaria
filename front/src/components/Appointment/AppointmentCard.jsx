import React, { useState } from 'react';
import styles from './AppointmentCard.module.css';
import imgCard from '../../assets/imgCard.png';
import { putCancelAppointment } from "../../helpers";

const AppointmentCard = ({ id, date, time, description, status, onCancel }) => {
  const [appointmentStatus, setAppointmentStatus] = useState(status);

  const cancelAppointment = async () => {
    onCancel(id);
    // const isConfirmed = window.confirm("¿Estás seguro que deseas cancelar esta cita?");
    // if (isConfirmed) {
    //   try {
    //     await putCancelAppointment(id);
    //     setAppointmentStatus('Cancelled');
    //     onCancel(id); // Update state in parent component
    //   } catch (error) {
    //     console.error("Error al cancelar la cita:", error);
    //   }
    // }
  };



  console.log('Revisando la información de recarga para el id: ');
  console.log(id, status);


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={imgCard} alt="Imagen de cita veterinaria" className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.title}>Cita Veterinaria</h3>
          <p><strong>Fecha:</strong> {date}</p>
          <p><strong>Hora:</strong> {time}</p>
          <p><strong>Descripción:</strong> {description}</p>
          <p><strong>Estatus:</strong> {status === 'Cancelled' ? 'Cancelada' : 'Activo'}</p>

          <button
            className={`${styles.button} ${status === 'Cancelled' ? styles.cancelled : ''}`}
            onClick={cancelAppointment}
            disabled={status === 'Cancelled'}
          >
            {status === 'Cancelled' ? 'Cita cancelada' : 'Cancelar cita'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;