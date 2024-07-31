import React from 'react';
import styles from './AppointmentCard.module.css'; // Importa los estilos del botón

const Button = ({ children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
