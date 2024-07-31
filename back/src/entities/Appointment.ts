import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({
    name:"appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date:Date

    @Column()
    time:number

    // @Column()
    // userId: number

    @Column({length: 200})
    description: string

    @Column({default: " active"})
    status: string

    @ManyToOne(() => User, (user) => user.appointment)
    user: User

}

