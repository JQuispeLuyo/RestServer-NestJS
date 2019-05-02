import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PersonaDto } from './dto/persona.dto';
import { Persona } from './interfaces/persona.interface';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {

    constructor(private personaService:PersonaService){}

    @Get()
    async getPersonas(): Promise<Persona[]>{
        return await this.personaService.findAll();
    }

    @Get(':IDPER')
    async getPersona(@Param('IDPER') IDPER: string): Promise<Persona>{
        return await this.personaService.read(parseInt(IDPER));
    }

    @Post()
    async crearPersona(@Body() persona: PersonaDto): Promise<Persona>{
        return await this.personaService.create(persona);
    }

    @Put(':IDPER')
    async actualizarPersona(@Body() persona: PersonaDto, @Param('NUMPER') IDPER:string): Promise<Persona>{
        return await this.personaService.update(parseInt(IDPER),persona);
    }

    @Delete(':IDPER')
    async borrarPersona(@Param('NUMPER') IDPER: string): Promise<Persona>{
        return await this.personaService.delete(parseInt(IDPER));
    }

}
