import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './model/persona.entity';
import { PersonaDto } from './dto/persona.dto';
import { Repository } from 'typeorm';
import { UserDto, Credential } from './dto/user.dto';

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
        await this.personaRepository.update({ IDPER }, data);
        const persona = await this.personaRepository.findOne({ where: { IDPER } });
        return persona;
    }

    async delete(IDPER: number) {
        const persona = await this.personaRepository.findOne({ where: { IDPER } });
        await this.personaRepository.delete({ IDPER });
        return persona;
    }

    async findByUserName(USERPER: string) {
        const userName = await this.personaRepository.findOne({ where: { USERPER } });
        return userName;
    }

    async login(data: Credential): Promise<UserDto> {
        const { USERPER, PSWPER } = data;
        const user = await this.personaRepository.createQueryBuilder("user")
        .where("user.USERPER = :USERPER", { USERPER })
        .getOne();
        console.log(user.NOMPER);
        //findOne({where: {USERPER: data.USERPER }});
        if (!user || !(await user.comparePassword(PSWPER))) {
            throw new HttpException(
                'Invalid username/password',
                HttpStatus.BAD_REQUEST);
        }
        return user.toResponseObjet();
    }

}
