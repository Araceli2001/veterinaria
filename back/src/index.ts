import server from "./server";
import { PORT } from "./config/envs"
import { AppDataSource } from "./config/data-source";
import { preloadAppointmentData, preloadData } from "./helpers/preloadData";
import { User } from "./entities/User";


// const initializeApp = async () => {
//     await AppDataSource.initialize();
//     const transactionalEntityManager = AppDataSource.manager;
//     let user = await preloadData();
//     await preloadAppointmentData();
 
//     server.listen(PORT, () => {
//         console.log(`server listening on port ${PORT}`);
//     })
//  }
 
//  initializeApp();
 

AppDataSource.initialize()
    .then(res => {
        server.listen(PORT, () => {
            console.log(`server listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error during initialization:', err);
    });






// server.listen(PORT, () => {
//     console.log(`server listening on port ${PORT}`);
// })


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