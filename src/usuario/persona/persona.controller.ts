import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PersonaDto } from './dto/persona.dto';
import { IPersona } from './interfaces/persona.interface';
import { PersonaService } from './persona.service';
import { User } from './persona.decorator';
import { AuthGuard } from '@nestjs/passport';


@Controller('persona')
export class PersonaController {

    constructor(private personaService: PersonaService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getPersonas(@User() user): Promise<IPersona[]> {
        return await this.personaService.findAll();
    }

    @Get('/asignaciones/:IDPER')
    async getCultivosPersona(){
        return await this.personaService.getCultivosAsignados();
    }

    @Get(':IDPER')
    async getPersona(@Param('IDPER') IDPER: string): Promise<IPersona> {
        return await this.personaService.read(parseInt(IDPER));
    }

    @Post()
    async crearPersona(@Body() persona: PersonaDto): Promise<IPersona> {
        return await this.personaService.create(persona);
    }

    @Put(':IDPER')
    async actualizarPersona(@Body() persona: PersonaDto, @Param('IDPER') IDPER: string): Promise<IPersona> {
        return await this.personaService.update(parseInt(IDPER), persona);
    }

    @Delete(':IDPER')
    async borrarPersona(@Param('IDPER') IDPER: string): Promise<IPersona> {
        return await this.personaService.delete(parseInt(IDPER));
    }

}
