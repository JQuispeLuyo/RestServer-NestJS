import { Sector } from './model/sector.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SectorService {

    constructor(
        @InjectRepository(Sector)
        private readonly personaRepository: Repository<Sector>,
    ) { }


    async getAll() {
        return this.personaRepository.find();
    }

}
