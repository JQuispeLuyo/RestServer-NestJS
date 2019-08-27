import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}