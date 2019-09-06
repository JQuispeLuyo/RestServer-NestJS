import { Sector } from '../../../sector/model/sector.entity';
import { Persona } from './../../persona/model/persona.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity('ASIGNACION_PERSONA')
export class AsignacionPersona{
    @PrimaryGeneratedColumn()
    IDASIGPER:number;

    @Column({name: "IDPER"})
    IDPER: number;

    @Column({name: "IDSECT"})
    IDSECT: number;

    @Column()
    FECASIG: Date;

    @Column("char", {length:1})
    ESTASIGPER;

    @ManyToOne(type=> Sector, sector => sector.asignacionPersonas)
    @JoinColumn({ name: "IDSECT" })
    sector: Sector;

    @ManyToOne(type=> Persona, persona => persona.asignacionPersonas)
    @JoinColumn({ name: "IDPER" })
    persona: Persona;
}