import { Sector } from './../../sector/model/sector.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Cultivo } from './../../cultivo/model/cultivo.entity';
import { DetalleInformacion } from './../../detalle-informacion/model/detalle-informacion.entity';

@Entity('ASIGNACION_CULTIVO')
export class AsignacionCultivo{

    @PrimaryGeneratedColumn()
    IDASIGCUL:number;

    @Column("char", {length: 1})
    ESTAASIGCUL:string

    @ManyToOne(type => Sector, sector =>sector.asignacionCultivos)
    @JoinColumn({name: "IDSECT"})
    sector: Sector;

    @ManyToOne(type => Cultivo, cultivo =>cultivo.asignacionCultivos)
    @JoinColumn({name: "IDCUL"})
    cultivo: Cultivo;

    @OneToMany(type=>DetalleInformacion, detalleInformacion => detalleInformacion.AsignacionCultivo)
    detalleInformacion: DetalleInformacion[];
}