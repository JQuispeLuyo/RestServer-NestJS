import { AsignacionPersonaService } from './asignacion-persona.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('asignacion-persona')
export class AsignacionPersonaController {

    constructor(private asigPersonaService:AsignacionPersonaService){}

    @Get('sector-cultivo/:IDPER')
    async findSectorCultivo(@Param('IDPER') IDPER:string){
        return this.asigPersonaService.getAsignPersonaSectorCultivo(IDPER);
    }

    @Get('sector/:IDPER')
    async findSector(@Param('IDPER') IDPER:string){
        return this.asigPersonaService.getAsignPersonaSector(IDPER);
    }

    @Get()
    async finAll(){
        return this.asigPersonaService.getAllAsignacionPersona();
    }
}
