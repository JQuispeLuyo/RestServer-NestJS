import { AsignacionPersonaService } from './asignacion-persona.service';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('asignacion-persona')
export class AsignacionPersonaController {

    constructor(private asigPersonaService:AsignacionPersonaService){}

    // @Get('asignaciones/:IDPER')
    // async findAsignaciones(@Param('IDPER') IDPER:number){
    //     return this.asigPersonaService.getAsignaciones(IDPER);
    // }

    @Get('sector-cultivo/:IDPER')
    async findSectorCultivo(@Param('IDPER') IDPER:string){
        return this.asigPersonaService.getAsignPersonaSectorCultivo(IDPER);
    }

    @Get('informacion/:IDPER')
    async findInformacion(@Param('IDPER') IDPER:number){
        return this.asigPersonaService.getInformacionRel(IDPER);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('nuevo/:IDPER')
    async findAsignaciones(@Param('IDPER') IDPER:number){
        return this.asigPersonaService.getNuevo(IDPER);
    }

    @Get('sector/:IDPER')
    async findSector(@Param('IDPER') IDPER:string){
        return this.asigPersonaService.getAsignPersonaSector(IDPER);
    }

    // @Get()
    // async finAll(){
    //     return this.asigPersonaService.getAllAsignacionPersona();
    // }
}
