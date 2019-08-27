import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('INFORMACION')
export class Informacion{
    @PrimaryGeneratedColumn()
    IDINFO:number;

    @Column()
    FECINFO: Date;

    @Column()
    IDASIG: number;

    @Column()
    IDPER: number;

    @Column("number",{ precision: 7, scale: 2 })
    TOTAREDET: number;

    @Column("char",{length:1})
    ESTAINFO: string;


}