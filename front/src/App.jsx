import './App.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar'
import MyAppointments from './views/MyAppointments/MyAppointments'
import Register from './views/Register/Register';
import Login from './views/Login/Login'
import CreateAppointmentForm from './views/Appointment/CreateAppointment';
import { Route, Routes, useLocation } from 'react-router-dom'; 

function App() {

  const location = useLocation();

  

  return (
    <>

      <Navbar/>


      <div style={{width:"70vw" , margin:"auto"}}>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/myAppointments' element={<MyAppointments  />} />         
          <Route path='/register' element={<Register />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/createAppointment' element={<CreateAppointmentForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;




// import React, { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Home from './views/Home/Home';
// import Navbar from './components/Navbar/Navbar';
// import MyAppointments from './views/MyAppointments/MyAppointments';
// import Register from './views/Register/Register';
// import Login from './views/Login/Login';
// import CreateAppointmentForm from './views/Appointment/CreateAppointment';

// function App() {
//   const location = useLocation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Función para manejar el inicio de sesión
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <> 
//     <Navbar isLoggedIn={isLoggedIn} />{/* Pasar el estado de inicio de sesión al Navbar */}
//       <div style={{ width: "70vw", margin: "auto" }}>
//         <Routes>
//           <Route path='/home' element={<Home />} />
//           {/* Mostrar las rutas de "Mis Citas" y "Crear Cita" solo si el usuario ha iniciado sesión */}
//           {isLoggedIn && (
//             <>
//               <Route path='/myAppointments' element={<MyAppointments />} />
//               <Route path='/createAppointment' element={<CreateAppointmentForm />} />
//             </>
//           )}
//           {/* Mostrar la ruta de Registro solo si el usuario no ha iniciado sesión */}
//           {!isLoggedIn && <Route path='/register' element={<Register />} />}
//           {/* Mostrar la ruta de Inicio de Sesión solo si el usuario no ha iniciado sesión y la ruta actual no es la de Inicio */}
//           {!isLoggedIn && location.pathname !== "/" && <Route path='/login' element={<Login onLogin={handleLogin} />} />}
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;