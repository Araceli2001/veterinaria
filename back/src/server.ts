import express from "express";
import {Router} from "express";
import { indexRouterUser } from "./routes";
import { indexRouterAppointment } from "./routes";
import morgan from 'morgan';
import cors from 'cors';



const server = express();

server.use(cors());
server.use(morgan('dev'));

server.use(express.json());
server.use(indexRouterUser);
server.use(indexRouterAppointment)


export default server;