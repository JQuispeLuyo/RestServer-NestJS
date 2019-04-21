import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('INFORMACION.CULTIVO')
export class Cultivo{

    @PrimaryColumn()
    NUMCUL: number;

    @Column("varchar",{length:50})
    NOMCUL: string

    @Column("char",{length:2})
    TIPCUL: string
}