import { Injectable } from '@nestjs/common';
import { AsignacionPersona } from './model/asignacion-persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from 'src/sector/model/sector.entity';

@Injectable()
export class AsignacionPersonaService {

    constructor(
        @InjectRepository(AsignacionPersona)
        private readonly personaAsignacionRepository: Repository<AsignacionPersona>){}
    
    async getAllAsignacionPersona(){
        return this.personaAsignacionRepository.find({relations: ['sector','persona']});
    }

    async getAsignPersonaSector(IDPER){
        //return this.personaAsignacionRepository.find({relations: ['sector'],where: {IDPER: 2}});
        let sql = `Select U.*
                        from PERSONA.ASIGNACION_PERSONA AS P
                            inner join UBICACION.SECTOR AS U
                                ON P.IDSECT = U.IDSECT
                        where P.IDPER = ${IDPER}`;

        return this.personaAsignacionRepository.query(sql);
    }

}
