import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { DetalleInformacion } from "./../../detalle-informacion/model/detalle-informacion.entity";
import { AsignacionPersona } from "./../../usuario/asignacion-persona/model/asignacion-persona.entity";

@Entity('INFORMACION')
export class Informacion{
    @PrimaryGeneratedColumn()
    IDINFO:number;

    @Column()
    FECINFO: Date;

    @Column()
    IDASIG: number;

    @Column()
    IDPER: number;

    @Column("number",{ precision: 7, scale: 2 })
    TOTAREDET: number;

    @Column("char",{length:1})
    ESTAINFO: string;

    @OneToMany(type => DetalleInformacion, detalleInformacion => detalleInformacion.informacion)
    detalleInformacion: DetalleInformacion[];

    @ManyToOne(type=> AsignacionPersona, asignacionPersona => asignacionPersona.informacion)
    @JoinColumn({name: "IDASIG"})
    asignacionPersona: AsignacionPersona;
    
}