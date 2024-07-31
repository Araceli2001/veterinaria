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
exports.getAllUserSevice = void 0;
let arrayUser = [
    { id: 1, name: "araceli", email: "araceli@gmail.com", birthdate: new Date(1980, 0, 1), nDni: 2001, credentialsId: 4545 },
    { id: 2, name: "laura", email: "laura@example.com", birthdate: new Date(1995, 5, 15), nDni: 671, credentialsId: 9045 },
];
const getAllUserSevice = () => __awaiter(void 0, void 0, void 0, function* () {
    return arrayUser;
});
exports.getAllUserSevice = getAllUserSevice;
