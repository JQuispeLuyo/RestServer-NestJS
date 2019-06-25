import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("INFORMACION.DETALLE_INFORMACION")
export class DetalleInformacion{

    @PrimaryGeneratedColumn()
    IDDETINFO: number;

    @Column("int")
    IDINFO: number;

    @Column("int")
    IDASIGCUL:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    CREDET:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    PRODET:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    SEMDET:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    COSDET:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    PERDET:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    AFEDET:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    ROTDET:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    VERDMES: number;

    @Column("decimal",{ precision: 7, scale: 2 })
    PRODDET: number;

    @Column("decimal",{ precision: 7, scale: 2 })
    PRECHA:	number;

    @Column("decimal",{ precision: 7, scale: 2 })
    VERMESANT: number;

    @Column()
    FECCOS:	Date;

    @Column("char",{length:1})
    VALDET:	string;

    @Column("char", {length:1})
    ESTADETINFO: string
}
