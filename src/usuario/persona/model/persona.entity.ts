import { AsignacionPersona } from './../../asignacion-persona/model/asignacion-persona.entity';
import { Entity, Column,PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('PERSONA')
export class Persona{
    @PrimaryGeneratedColumn()
    IDPER: number;

    @Column("varchar2",{length: 100})
    NOMPER: string;

    @Column("varchar2",{length: 100})
    APEPER: string;

    @Column("char",{length: 8})
    DNIPER: string;

    @Column("char",{length: 9})
    TELPER: string;

    @Column("char",{length: 1})
    TIPPER: string;

    @Column("char",{length: 1})
    ESTAPER: string;

    @Column("varchar2",{length: 30})
    USERPER: string;

    @Column("varchar2",{length: 500})
    PSWPER: string;

    @OneToMany(type => AsignacionPersona, asignacionPersonas => asignacionPersonas.persona)
    asignacionPersonas: AsignacionPersona[];
}