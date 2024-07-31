"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancel = exports.schedule = exports.getAppointment = exports.getAllAppointments = void 0;
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Obtener el listado de todos las citas');
});
exports.getAllAppointments = getAllAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Obtener un turno de cita');
});
exports.getAppointment = getAppointment;
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('agendar turno');
});
exports.schedule = schedule;
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('cancelar turno');
});
exports.cancel = cancel;
