import { InformacionService } from './informacion.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataI } from './interfaces/interfaces';

@Controller('informacion')
export class InformacionController {

    constructor(private informacionService:InformacionService){}

    @Get()
    async getAllInformacion(){
        return this.informacionService.getAllInformacion();
    }

    @Get('nuevo')
    async getAllInformacion1(){
        return this.informacionService.getInformacionRel();
    }

}
