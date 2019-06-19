import { Informacion } from './model/informacion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InformacionService {

    constructor(
        @InjectRepository(Informacion)
        private readonly informacionRepository:Repository<Informacion>,
        ){}

    async getAllInformacion(){
        return this.informacionRepository.find();
    }
    
}
