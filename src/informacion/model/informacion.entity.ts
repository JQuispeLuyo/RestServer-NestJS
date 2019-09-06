import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DetalleInformacion } from "./../../detalle-informacion/model/detalle-informacion.entity";

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
    
}