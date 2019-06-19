import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('INFORMACION.INFORMACION')
export class Informacion{
    @PrimaryGeneratedColumn()
    IDINFO:number;

    @Column("int")
    FECINFO: Date;

    @Column("int")
    IDASIG: number;

    @Column("int")
    IDPER: number;

    @Column("decimal",{ precision: 7, scale: 2 })
    TOTAREDET: number;

    @Column("char",{length:1})
    ESTAINFO: string;


}