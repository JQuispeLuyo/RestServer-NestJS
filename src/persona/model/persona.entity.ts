import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('PERSONA.PERSONA')
export class Persona{
    @PrimaryColumn()
    NUMPER: number;

    @Column("varchar",{length: 100})
    NOMPER: string;

    @Column("varchar",{length: 100})
    APEPER: string;

    @Column("char",{length: 8})
    DNIPER: string;

    @Column("char",{length: 9})
    TELPER: string;

    @Column("char",{length: 1})
    TIPPER: string;

    @Column("char",{length: 1})
    ESTAPER: string;

    @Column("varchar",{length: 30})
    USERPER: string;

    @Column("varchar",{length: 500})
    PSWPER: string;

}