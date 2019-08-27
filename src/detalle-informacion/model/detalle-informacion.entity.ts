import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';

@Entity("DETALLE_INFORMACION")
export class DetalleInformacion{

    @PrimaryGeneratedColumn()
    IDDETINFO: number;

    @JoinColumn()
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
    ESTADETINFO: string
}
