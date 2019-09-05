import { AsignacionCultivo } from './../../asignacion-cultivo/model/asignacion-cultivo.entity';
import { AsignacionPersona } from '../../usuario/asignacion-persona/model/asignacion-persona.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('SECTOR')
export class Sector{

    @PrimaryGeneratedColumn()
    IDSECT: number;

    @Column("varchar2",{length: 100})
    NOMSECT: string;

    @Column("number",{ precision: 7, scale: 2 })
    AREASECT: number;

    @Column()
    IDVALL: number;

    @Column("char", {length: 6})
    CODUBI: string;

    @Column("char",{length: 1})
    ESTSECT: string;


    @OneToMany(type => AsignacionPersona, asignacionPersona => asignacionPersona.sector)
    asignacionPersonas:AsignacionPersona[];

    @OneToMany(type => AsignacionCultivo, asignacionCultivo => asignacionCultivo.sector)
    asignacionCultivos: AsignacionCultivo[];

}