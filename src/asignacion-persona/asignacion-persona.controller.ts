import { AsignacionPersonaService } from './asignacion-persona.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('asignacion-persona')
export class AsignacionPersonaController {

    constructor(private asigPersonaService:AsignacionPersonaService){}

    @Get()
    async finAll(){
        return this.asigPersonaService.getAllAsignacionPersona();
    }

    @Get('sector/:IDPER')
    async finSector(@Param('IDPER') IDPER:string){
        return this.asigPersonaService.getAsignPersonaSector(IDPER);
    }
    
}
