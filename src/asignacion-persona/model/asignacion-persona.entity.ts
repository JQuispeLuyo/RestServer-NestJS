import { Sector } from './../../sector/model/sector.entity';
import { Persona } from './../../persona/model/persona.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity('PERSONA.ASIGNACION_PERSONA')
export class AsignacionPersona{
    @PrimaryGeneratedColumn()
    IDASIGPER:number;

    @Column()
    FECASIG: Date;

    @Column()
    IDSECT:number;

    @Column()
    IDPER:number; 

    @Column("char", {length:1})
    ESTAPER;

    @ManyToOne(type=> Sector, sector => sector.asignacionPersona)
    @JoinColumn({ name: "IDSECT" })
    sector: Sector;

    @ManyToOne(type=> Persona, persona => persona.asignacionPersona)
    @JoinColumn({ name: "IDPER" })
    persona: Persona;
}