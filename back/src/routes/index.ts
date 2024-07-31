import { Router } from 'express';
import routerUser from './usersRouter';
import routerAppointment from './appointmentsRouter';

const indexRouterAppointment = Router();
const indexRouterUser = Router();

indexRouterAppointment.use('/', routerAppointment);
indexRouterUser.use('/', routerUser);

export { indexRouterAppointment, indexRouterUser };










// import { Router } from 'express';
// import routerUser from './usersRouter';
// import routerAppointment from './appointmentsRouter';


// const indexRouterAppointment = Router();
// const indexRouterUser = Router();

// indexRouterAppointment.use('/', routerAppointment);
// indexRouterUser.use('/', routerUser);


// export  {indexRouterAppointment,indexRouterUser};



// const { Router } = require('express');

// import {getAllUsers, getUserById, registerUser, loginUser} from "../controllers/usersController";
// import { getAllAppointments, getAppointment, schedule, cancel } from "../controllers/appointmentsController";
// //const router = require('./usersRouter');
// const routerAppointment = require('./appointmentsRouter');

// const router = Router();

// router.get("/appointments", getAllAppointments);

