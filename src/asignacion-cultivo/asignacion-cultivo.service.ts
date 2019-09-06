import { AsignacionCultivo } from './model/asignacion-cultivo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionCultivoService {

    constructor(
        @InjectRepository(AsignacionCultivo)
        private asigCultivoRepository: Repository<AsignacionCultivo>,
    ) { }

    async findAll(){
        return this.asigCultivoRepository.createQueryBuilder("asignacionCultivos")
        .innerJoinAndSelect("asignacionCultivos.cultivo", "cultivo")
        .innerJoinAndSelect("asignacionCultivos.sector", "sector")
        .getMany();
    }
}
