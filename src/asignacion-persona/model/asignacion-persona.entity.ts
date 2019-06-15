import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('PERSONA.ASIGNACION_PERSONA')
export class AsignacionPersona{
    @PrimaryGeneratedColumn()
    IDASIGPER:number

    @Column()
    FECASIG: Date

    @Column()
    IDSECT:number

    @Column()
    IDPER:number 

    @Column("char", {length:1})
    ESTAPER	

}