import { Controller, Get, Param } from '@nestjs/common';
import { CultivoService } from './cultivo.service';

@Controller('cultivo')
export class CultivoController {

    constructor(private cultivoService: CultivoService){}

    @Get()
    getCultivo(){
        return this.cultivoService.getAll();
    }

    @Get(':NUMCUL')
    readCultivo(@Param('NUMCUL') NUMCUL: string){
        return this.cultivoService.getCultivo(parseInt(NUMCUL));
    }

    @Get('tipo/:TIPCUL')
    getTipCultivo(@Param('TIPCUL') TIPCUL: string){
        console.log(TIPCUL);
        return this.cultivoService.getTipCultivo(TIPCUL);
    }

}
