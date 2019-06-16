import { SectorService } from './sector.service';
import { Controller, Get } from '@nestjs/common';

@Controller('sector')
export class SectorController {

    constructor(private sectorService:SectorService){}

    @Get()
    getAllSector(){
        return this.sectorService.getAll();
    }

}
