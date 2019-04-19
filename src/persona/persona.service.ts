import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona} from './model/persona.entity';
import { PersonaDto } from './dto/persona.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {

    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>,
    ){}

    async findAll(){
        return await this.personaRepository.find();
    }

    async create(data: PersonaDto){
        const persona = await this.personaRepository.create(data);
        await this.personaRepository.save(persona);
        return persona;
    }

    async update(NUMPER: number, data: PersonaDto){
        const persona = await this.personaRepository.findOne({where: {NUMPER}});
        await this.personaRepository.update({NUMPER},data);
        return persona;
    }

    async read(NUMPER: number){
        let persona = await this.personaRepository.findOne({where: {NUMPER}});
        return persona; 
    }

    async delete(NUMPER: number){
        const persona = await this.personaRepository.findOne({where:{NUMPER}});
        await this.personaRepository.delete({NUMPER});
        return persona;
    }

}
