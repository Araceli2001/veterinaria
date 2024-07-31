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
exports.cancelService = exports.scheduleService = exports.getAppointmentService = exports.getAllAppointmentsService = void 0;
const getAllAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAllAppointmentsService = getAllAppointmentsService;
const getAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAppointmentService = getAppointmentService;
const scheduleService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.scheduleService = scheduleService;
const cancelService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.cancelService = cancelService;
