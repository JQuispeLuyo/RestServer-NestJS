import { DataI } from './../informacion/interfaces/interfaces';
import { DetalleInformacionDto } from './dto/detalle-informacion.dto';
import { DetalleInformacionService } from './detalle-informacion.service';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('detalle-informacion')
export class DetalleInformacionController {


    constructor(private detInfoService: DetalleInformacionService){}


    @Get()
    getDetalleInformacion(){
        return this.detInfoService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createDetalleInformacion(@Body() detInfo: DetalleInformacionDto[]){
        return await this.detInfoService.create(detInfo);
    }

    @Post('anterior')
    async getMesAnteriorInformacion(@Body() data:DataI){
        return this.detInfoService.getTotalAnterior(data);
    }

    @Post('actual')
    async getMesActualInformacion(@Body() data:DataI){
        return this.detInfoService.getDetallesActual(data);
    }

    

}
