import { Injectable } from '@nestjs/common';
import { AsignacionPersona } from './model/asignacion-persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AsignacionPersonaService {

    constructor(
        @InjectRepository(AsignacionPersona)
        private readonly personaAsignacionRepository: Repository<AsignacionPersona>,){}
    
    async getAllAsignacionPersona(){
        return this.personaAsignacionRepository.find({relations: ['persona','sector']});
    }

    async getAsignPersonaSector(IDPER){
        return this.personaAsignacionRepository.createQueryBuilder("asignacionPersonas")
        .innerJoinAndSelect("asignacionPersonas.sector", "sector")
        .where("asignacionPersonas.IDPER = :IDPER", {IDPER})
        .andWhere("asignacionPersonas.ESTASIGPER = :ESTASIGPER", {ESTASIGPER: "A"})
        .getMany();
        //return this.personaAsignacionRepository.query(sql);
    }

    async getAsignPersonaSectorCultivo(IDPER){
        return this.personaAsignacionRepository.createQueryBuilder("asignacionPersonas")
        .innerJoinAndSelect("asignacionPersonas.sector", "sector")
        .innerJoinAndSelect("sector.asignacionCultivos", "asignacionCultivos")
        .innerJoinAndSelect("asignacionCultivos.cultivo", "cultivo")
        .where("asignacionPersonas.IDPER = :IDPER", {IDPER})
        .andWhere("asignacionPersonas.ESTASIGPER = :ESTASIGPER", {ESTASIGPER: "A"})
        .getMany();
        //return this.personaAsignacionRepository.query(sql);
    }

}
