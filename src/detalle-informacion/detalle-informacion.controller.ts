import { DataI } from './../informacion/interfaces/interfaces';
import { DetalleInformacionDto } from './dto/detalle-informacion.dto';
import { DetalleInformacionService } from './detalle-informacion.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('detalle-informacion')
export class DetalleInformacionController {


    constructor(private detInfoService: DetalleInformacionService){}


    @Get()
    getDetalleInformacion(){
        return this.detInfoService.findAll();
    }

    @Post()
    async createDetalleInformacion(@Body() detInfo: DetalleInformacionDto){
        console.log(detInfo);
        return await this.detInfoService.create(detInfo);
    }

    @Post('anterior')
    async getMesAnteriorInformacion(@Body() data:DataI){
        return this.detInfoService.getTotalAnterior(data);
    }

    

}
