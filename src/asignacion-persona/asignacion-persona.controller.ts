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
    
    
    // @Get(':IDPER')
    // getCultivosAsig(@Param('IDPER') IDPER: string){
    //     console.log(IDPER);
    //     return this.asigPersonaService.asignacion(IDPER);
    // }

}
