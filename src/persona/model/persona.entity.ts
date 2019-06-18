import { AsignacionPersona } from './../../asignacion-persona/model/asignacion-persona.entity';
import { UserDto} from './../dto/user.dto';
import { Entity, Column,PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import * as jwt from 'jsonwebtoken';

@Entity('PERSONA.PERSONA')
export class Persona{
    @PrimaryGeneratedColumn()
    IDPER: number;

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

    @OneToMany(type => AsignacionPersona, asignacionPersona => asignacionPersona.persona)
    asignacionPersona: AsignacionPersona[];

    toResponseObjet(showToken: boolean = true): UserDto{
        const { IDPER, NOMPER, APEPER, DNIPER, TELPER, TIPPER, ESTAPER, USERPER, token} = this;

        const responseObjet:any = {IDPER, NOMPER, APEPER, DNIPER, TELPER, TIPPER, ESTAPER, USERPER};

        if(showToken){
            responseObjet.token = token;
        }

        return responseObjet;
    }

    async comparePassword(attemp: string){
        return (attemp === this.PSWPER);
    }

    private get token (){
        const {IDPER, USERPER } = this;
        return jwt.sign({
            IDPER, USERPER
        },process.env.SECRET || "secretKey", {expiresIn: '7d'});
    }

}