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

    async getInformacionRel(IDPER: number) {
        return this.personaAsignacionRepository.createQueryBuilder("asignacionPersonas")
        .innerJoinAndSelect("asignacionPersonas.informacion", "informacion")
        .innerJoinAndSelect("informacion.detalleInformacion", "detalleInformacion")
        .where("informacion.FECINFO between TRUNC(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24), 'MM') and TRUNC(LAST_DAY(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24)))")
        .andWhere("asignacionPersonas.IDPER = :IDPER", {IDPER})
        .getMany()
       //return this.informacionRepository.query(sql);
    }

}
