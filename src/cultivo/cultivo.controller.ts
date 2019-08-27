import { Controller, Get, Param } from '@nestjs/common';
import { CultivoService } from './cultivo.service';

@Controller('cultivo')
export class CultivoController {

    constructor(private cultivoService: CultivoService){}

    @Get()
    getCultivo(){
        return this.cultivoService.getAll();
    }

    @Get(':IDCUL')
    readCultivo(@Param('IDCUL') IDCUL: string){
        return this.cultivoService.getCultivo(parseInt(IDCUL));
    }

    @Get('tipo/:TIPCUL')
    getTipCultivo(@Param('TIPCUL') TIPCUL: string){
        console.log(TIPCUL);
        return this.cultivoService.getTipCultivo(TIPCUL);
    }

    @Get('sector/:IDSECT')
    getSectorCultivo(@Param('IDSECT') IDSECT: string){
        console.log(IDSECT);
        return this.cultivoService.getCultivosAsignados(IDSECT);
    }

}
