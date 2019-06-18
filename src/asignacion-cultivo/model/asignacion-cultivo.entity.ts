import { Sector } from './../../sector/model/sector.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity('CULTIVO.ASIGNACION_CULTIVO')
export class AsignacionCultivo{

    @PrimaryGeneratedColumn()
    IDASIGCUL:number;

    @Column()
    IDCUL:number;

    @Column()
    IDSECT:number;

    @Column("char", {length: 1})
    ESTAASIGCUL:string

    @ManyToOne(type => Sector, sector =>sector.asignacionCultivo)
    @JoinColumn({name: "IDSECT"})
    sector: Sector;
}