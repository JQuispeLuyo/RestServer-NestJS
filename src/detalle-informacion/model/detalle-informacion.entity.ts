import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Informacion } from './../../informacion/model/informacion.entity';
import { AsignacionCultivo } from './../../asignacion-cultivo/model/asignacion-cultivo.entity';

@Entity("DETALLE_INFORMACION")
export class DetalleInformacion{

    @PrimaryGeneratedColumn()
    IDDETINFO: number;

    @Column({name: "IDINFO"})
    IDINFO: number;

    @Column()
    IDASIGCUL:number;

    @Column("number",{ precision: 7, scale: 2 })
    CREDET:	number;

    @Column("number",{ precision: 7, scale: 2 })
    PRODET:	number;

    @Column("number",{ precision: 7, scale: 2 })
    SEMDET:	number;

    @Column("number",{ precision: 7, scale: 2 })
    COSDET:	number;

    @Column("number",{ precision: 7, scale: 2 })
    PERDET:	number;

    @Column("number",{ precision: 7, scale: 2 })
    AFEDET:	number;

    @Column("number",{ precision: 7, scale: 2 })
    ROTDET:	number;

    @Column("number",{ precision: 7, scale: 2 })
    VERDMES: number;

    @Column("number",{ precision: 7, scale: 2 })
    PRODDET: number;

    @Column("number",{ precision: 7, scale: 2 })
    PRECHA:	number;

    @Column("number",{ precision: 7, scale: 2 })
    VERMESANT: number;

    @Column()
    FECCOS:	Date;

    @Column("char",{length:1})
    VALDET:	string;

    @Column("char", {length:1})
    ESTADETINFO: string;

    @ManyToOne(type => Informacion, informacion => informacion.detalleInformacion)
    @JoinColumn({name: "IDINFO"})
    informacion: Informacion;

    @ManyToOne(type => AsignacionCultivo, AsignacionCultivo => AsignacionCultivo.detalleInformacion)
    @JoinColumn({name: "IDASIGCUL"})
    AsignacionCultivo: AsignacionCultivo[];
}
