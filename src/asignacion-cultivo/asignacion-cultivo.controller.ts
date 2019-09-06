import { AsignacionCultivoService } from './asignacion-cultivo.service';
import { Controller, Get, Param } from '@nestjs/common';


@Controller('asignacion-cultivo')
export class AsignacionCultivoController {

    constructor(private asigCultivoService:AsignacionCultivoService){}

    @Get()
    async findAll(){
        return this.asigCultivoService.findAll();
    }
}