// enum AppointmentRole {
//     ACTIVE = "active",
//     CANCELLED = "cancelled"
// }

interface IAppointment {
    id: number,
    date:Date,
    time:number,
    userId: number,
    description: string;
    status: "Active"|"Cancelled";
}

export {IAppointment};