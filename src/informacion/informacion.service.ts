import { Informacion } from './model/informacion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InformacionService {

    constructor(
        @InjectRepository(Informacion)
        private readonly informacionRepository: Repository<Informacion>,
    ) { }

    async getAllInformacion() {
        return this.informacionRepository.find();
    }

    async getInformacionRel() {
        return this.informacionRepository.createQueryBuilder("informacion")
        .where("informacion.FECINFO between TRUNC(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24), 'MM') and TRUNC(LAST_DAY(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24)))")
        .getMany();
    }
}
