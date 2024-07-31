import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.user !== null);

    console.log("Verificación de autenticación");
    console.log(isAuthenticated);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo veterinaria" className={styles.logoImg} />
      </div>
      <div className={styles.menu}>
        <nav>
          <ul className={styles.menuItems}>
            <Link to="/" className={styles.link}>HOME</Link>
            {isAuthenticated && ( 
              <>
                <Link to="/myAppointments" className={styles.link}>Mis Citas</Link>
                <Link to="/createAppointment" className={styles.link}>Crear Cita</Link>
              </>
            )}
            {!isAuthenticated && (<Link to="/register" className={styles.link}>Registro</Link>)}
            {!isAuthenticated && (<Link to="/login" className={styles.link}>Login</Link>)}
            {isAuthenticated && (<Link to="/login" className={styles.link}>Cerrar sesión</Link>)}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
