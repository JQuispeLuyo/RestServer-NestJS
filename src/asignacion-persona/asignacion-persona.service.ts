import { Injectable } from '@nestjs/common';
import { AsignacionPersona } from './model/asignacion-persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './../persona/model/persona.entity';

@Injectable()
export class AsignacionPersonaService {

    constructor(
        @InjectRepository(AsignacionPersona)
        private readonly personaAsignacionRepository: Repository<AsignacionPersona>,
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>){}
    
    async getAllAsignacionPersona(){
        return this.personaAsignacionRepository.find({relations: ['persona','sector']});
    }

    async getAsignPersonaSector(IDPER){
        //return this.personaAsignacionRepository.find({relations: ['sector'],where: {IDPER: IDPER}});
        let sql = `Select P.IDASIGPER,U.*
                        from ASIGNACION_PERSONA P
                            inner join SECTOR U
                                ON P.IDSECT = U.IDSECT
                        where P.IDPER = ${IDPER} and ESTASIGPER = 'A'`;

        // return this.personaRepository.createQueryBuilder("persona")
        // .innerJoinAndSelect("persona.asignacionPersonas", "asignacionPersonas")
        // .innerJoinAndSelect("asignacionPersonas.sector", "sector")
        // .where("persona.IDPER = :IDPER", {IDPER})
        // .getMany();
        return this.personaAsignacionRepository.query(sql);
    }

}
