import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { AsignacionCultivo } from './../../asignacion-cultivo/model/asignacion-cultivo.entity';

@Entity('CULTIVO')
export class Cultivo{

    @PrimaryGeneratedColumn()
    IDCUL: number;

    @Column("varchar2",{length:50})
    NOMCUL: string

    @Column("char",{length:2})
    TIPCUL: string

    @Column("char", {length:1})
    ESTACUL: string

    @OneToMany(type => AsignacionCultivo, asignacionCultivos => asignacionCultivos.cultivo)
    asignacionCultivos: AsignacionCultivo[];
}