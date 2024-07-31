import axios from "axios";

//user
export async function posLogintUser(userData) {
    try {
        const response = await axios.post("http://localhost:3000/users/login", userData);
        return response.data;
    } catch (error) {
        throw error; 
    }

}


export async function postRegisterUser(userData) {
  try {
    const response = await axios.post("http://localhost:3000/users/register", userData);
    return response.data;
  } catch (error) {
    throw error; // Si hay un error, rechazarlo para manejarlo en el componente React
  }
}

export async function getIdUser(userId) {
    try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }

}

//appointments
export async function getAllAppointments() {
    try {
        const response = await axios.get("http://localhost:3000/appointments");
        return response.data;
    } catch (error) {
        throw error; 
    }

}

export async function getIdAllAppointment(id) {
    try {
        const response = await axios.get(`http://localhost:3000/appointment/${id}`);
        return response.data; 
    } catch (error) {
        throw error;
    }

}

export async function postCreateAppointment(appointment) {
    try {
        const response = await axios.post("http://localhost:3000/appointment/schedule", appointment);
        return response.data;   
    } catch (error) {
        throw error;
    }

}

export async function putCancelAppointment(appointmentId) {
    try {
        const response = await axios.put(`http://localhost:3000/appointment/cancel/${appointmentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }

}




