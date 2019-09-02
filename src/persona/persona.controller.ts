import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PersonaDto } from './dto/persona.dto';
import { Persona } from './interfaces/persona.interface';
import { PersonaService } from './persona.service';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from './../shared/auth.guard';
import { User } from './persona.decorator';


@Controller('persona')
export class PersonaController {

    constructor(private personaService: PersonaService) { }

    @Post('login')
    login(@Body() data: UserDto){
        return this.personaService.login(data);
    }

    @Get()
    @UseGuards(new AuthGuard())
    async getPersonas(@User() user): Promise<Persona[]> {
        return await this.personaService.findAll();
    }

    @Get(':IDPER')
    async getPersona(@Param('IDPER') IDPER: string): Promise<Persona> {
        return await this.personaService.read(parseInt(IDPER));
    }

    @Get('/asignaciones')
    async getCultivosPersona(){
        return await this.personaService.getCultivosAsignados();
    }

    @Post()
    async crearPersona(@Body() persona: PersonaDto): Promise<Persona> {
        return await this.personaService.create(persona);
    }

    @Put(':IDPER')
    async actualizarPersona(@Body() persona: PersonaDto, @Param('IDPER') IDPER: string): Promise<Persona> {
        return await this.personaService.update(parseInt(IDPER), persona);
    }

    @Delete(':IDPER')
    async borrarPersona(@Param('IDPER') IDPER: string): Promise<Persona> {
        return await this.personaService.delete(parseInt(IDPER));
    }

}
