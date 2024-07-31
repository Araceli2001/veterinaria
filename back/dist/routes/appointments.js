"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const router = (0, express_1.Router)();
//appointments-----
//Obtener el listado de todos los turnos de todos los usuarios.
router.get("/appointments", appointmentsController_1.getAllAppointments);
// Obtener el detalle de un turno específico.
router.get("/appointment", appointmentsController_1.getAppointment);
//Agendar un nuevo turno.
router.post("/appointment/schedule", appointmentsController_1.schedule);
//Cambiar el estatus de un turno a “cancelled”.
router.put("/appointment/cancel", appointmentsController_1.cancel);
exports.default = router;
