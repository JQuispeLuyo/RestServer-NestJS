import { AsignacionCultivo } from './../../asignacion-cultivo/model/asignacion-cultivo.entity';
import { AsignacionPersona } from './../../asignacion-persona/model/asignacion-persona.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('UBICACION.SECTOR')
export class Sector{

    @PrimaryGeneratedColumn()
    IDSECT: number;

    @Column("varchar",{length: 100})
    NOMSECT: string;

    @Column("decimal",{ precision: 7, scale: 2 })
    AREASECT: number;

    @Column()
    IDVALL: number;

    @Column("char", {length: 6})
    CODUBI: string;

    @Column("char",{length: 1})
    ESTSECT: string;


    @OneToMany(type => AsignacionPersona, asignacionPersona => AsignacionPersona)
    asignacionPersona:AsignacionPersona;

    @OneToMany(type => AsignacionCultivo, asignacionCultivo => asignacionCultivo.sector)
    asignacionCultivo: AsignacionCultivo;

}