import React from 'react';
import styles from "./Home.module.css";
import imgHome from '../../assets/imgHome.jpeg';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>BIENVENID@</h1>
            <h2 className={styles.subtitle}>Veterinaria "Mundo Animal"</h2>
            <div>
                <img src={imgHome} alt="veterinaria" className={styles.image} />
            </div>
        </div>
    );
};

export default Home;
