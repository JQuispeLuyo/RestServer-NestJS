import { InformacionService } from './informacion.service';
import { Controller, Get } from '@nestjs/common';

@Controller('informacion')
export class InformacionController {

    constructor(private informacionService:InformacionService){}

    @Get()
    async getAllInformacion(){
        return this.informacionService.getAllInformacion();
    }


}
