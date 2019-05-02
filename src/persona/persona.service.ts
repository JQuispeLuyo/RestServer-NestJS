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
        
        //return await this.personaRepository.find();
        return await this.personaRepository.find();
    }

    async read(IDPER: number){
        let persona = await this.personaRepository.findOne({where: {IDPER}});
        return persona; 
    }

    async create(data: Partial<PersonaDto>){
        const persona = await this.personaRepository.create(data);
        await this.personaRepository.save(persona);
        return persona;
    }

    async update(IDPER: number, data: Partial<PersonaDto>){
        const persona = await this.personaRepository.findOne({where: {IDPER}});
        await this.personaRepository.update({IDPER},data);
        return persona;
    }

    async delete(IDPER: number){
        const persona = await this.personaRepository.findOne({where:{IDPER}});
        await this.personaRepository.delete({IDPER});
        return persona;
    }

}
