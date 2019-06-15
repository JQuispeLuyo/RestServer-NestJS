import { Injectable } from '@nestjs/common';
import { AsignacionPersona } from './model/asignacion-persona.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AsignacionPersonaService {

    constructor(
        @InjectRepository(AsignacionPersona)
        private readonly personaRepository: Repository<AsignacionPersona>){}
    
    async getAllAsignacionPersona(){
        return this.personaRepository.find();
    }

}
