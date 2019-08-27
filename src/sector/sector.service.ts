import { Sector } from './model/sector.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SectorService {

    constructor(
        @InjectRepository(Sector)
        private readonly sectorRepository: Repository<Sector>,
    ) { }


    async getAll() {
        return this.sectorRepository.find();
    }

    async getCultivosAsignados(){
        return this.sectorRepository.createQueryBuilder("sector")
        .innerJoinAndSelect("sector.asignacionCultivos", "asignacionCultivos")
        .innerJoinAndSelect("asignacionCultivos.cultivo", "cultivo") 
        .innerJoinAndSelect("sector.asignacionPersonas", "asignacionPersonas") 
        .innerJoinAndSelect("asignacionPersonas.persona", "persona") 
        .getMany();
    }

}
