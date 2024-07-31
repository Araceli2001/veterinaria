"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
server_1.default.listen(envs_1.PORT, () => {
    console.log(`server listening on port ${envs_1.PORT}`);
});
//clase 3 ----
// const express = require("express");
//  require("dotenv").config()
//  const PORT = process.env.PORT
// const server = express();
// server.listen(PORT, () => {
//     console.log(`server listening on port ${PORT}`);
// })
//clase 2------
// const numero1: number = 5;
// const palabra1: string = "Hola";
// const sumar = (a:number, b:number): number => {
//  return a + b;
// }
