import { Injectable } from '@nestjs/common';
import { AsignacionPersona } from './model/asignacion-persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AsignacionPersonaService {

    constructor(
        @InjectRepository(AsignacionPersona)
        private readonly personaAsignacionRepository: Repository<AsignacionPersona>){}
    
    async getAllAsignacionPersona(){
        return this.personaAsignacionRepository.find({relations: ['persona','sector']});
    }

    async getAsignPersonaSector(IDPER){
        return this.personaAsignacionRepository.find({relations: ['sector'],where: {IDPER: IDPER}});
        let sql = `Select P.IDASIGPER,U.*
                        from ASIGNACION_PERSONA P
                            inner join SECTOR U
                                ON P.IDSECT = U.IDSECT
                        where P.IDPER = ${IDPER} and ESTASIGPER = 'A'`;

        return this.personaAsignacionRepository.query(sql);
    }

}
