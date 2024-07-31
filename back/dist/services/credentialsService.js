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
exports.createCredentialService = void 0;
let accessArray = [];
let id = 1;
const createCredentialService = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = {
        id: id,
        username: credentialData.username,
        password: credentialData.password
    };
    accessArray.push(newCredential);
    id++;
    return newCredential.id;
});
exports.createCredentialService = createCredentialService;
const newCredentialData = {
    id: 1,
    username: "araceli",
    password: "password"
};
(0, exports.createCredentialService)(newCredentialData)
    .then(resultado1 => {
    console.log("Se ha creado un nuevo par de credenciales con ID:", resultado1);
})
    .catch(error => {
    console.error("Error:", error);
});
//******* FUNCTION 2
function login(username, password) {
    const ICredential = accessArray.find(acceso => acceso.username === username);
    if (!ICredential) {
        return null;
    }
    if (ICredential.password === password) {
        return ICredential.id;
    }
    return null;
}
const userId = login("araceli", "password");
if (userId !== null) {
    console.log("La validación exitosa. ID de las credenciales:", userId);
}
else {
    console.log("Nombre de usuario o contraseña incorrectos.");
}
