import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './model/persona.entity';
import { PersonaDto } from './dto/persona.dto';
import { Repository } from 'typeorm';
var md5 = require('md5');

@Injectable()
export class PersonaService {

    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>,
    ) { }

    async findAll() {
        const users = await this.personaRepository.find();
        return users;
        //return users.map(user => user.toResponseObjet());
    }

    async read(IDPER: number) {
        let persona = await this.personaRepository.createQueryBuilder("persona")
        .where("persona.IDPER = :IDPER", { IDPER })
        .getOne();
        
        
        //.findOne({ where: { IDPER } });
        return persona;
    }

    async create(data: Partial<PersonaDto>) {
        const persona = await this.personaRepository.create(data);
        await this.personaRepository.save(persona);
        return persona;
    }

    async update(IDPER: number, data: Partial<PersonaDto>) {
        if(data.PSWPER !== undefined && data.PSWPER !== ""){
            data.PSWPER = md5(data.PSWPER);
        }
        await this.personaRepository.update({ IDPER }, data);

        const persona = await this.personaRepository.createQueryBuilder("persona")
        .where("persona.IDPER = :IDPER", { IDPER })
        .getOne();
        return persona;
    }

    async delete(IDPER: number) {
        const persona = await this.personaRepository.createQueryBuilder("persona")
        .where("persona.IDPER = :IDPER", { IDPER })
        .getOne();
        
        //.findOne({ where: { IDPER } });
        await this.personaRepository.delete({ IDPER });
        return persona;
    }

    async findByUserName(USERPER: string) {
        const userName = await this.personaRepository.createQueryBuilder("persona")
        .where("persona.USERPER = :USERPER", { USERPER })
        .getOne();
        return userName;
    }

    async getCultivosAsignados(){
        return this.personaRepository.createQueryBuilder("persona")
        .innerJoinAndSelect("persona.asignacionPersonas", "asignacionPersonas")
        .innerJoinAndSelect("asignacionPersonas.sector", "sector") 
        .innerJoinAndSelect("sector.asignacionCultivos", "asignacionCultivos") 
        .innerJoinAndSelect("asignacionCultivos.cultivo", "cultivo") 
        .getMany();

    }

}
