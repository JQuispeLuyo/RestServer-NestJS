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

    @Get(':NUMPER')
    async getPersona(@Param('NUMPER') NUMPER: string): Promise<Persona>{
        return await this.personaService.read(parseInt(NUMPER));
    }

    @Post()
    async crearPersona(@Body() persona: PersonaDto): Promise<Persona>{
        return await this.personaService.create(persona);
    }

    @Put(':NUMPER')
    async actualizarPersona(@Body() persona: PersonaDto, @Param('NUMPER') NUMPER:string): Promise<Persona>{
        return await this.personaService.update(parseInt(NUMPER),persona);
    }

    @Delete(':NUMPER')
    async borrarPersona(@Param('NUMPER') NUMPER: string): Promise<Persona>{
        return await this.personaService.delete(parseInt(NUMPER));
    }

}
