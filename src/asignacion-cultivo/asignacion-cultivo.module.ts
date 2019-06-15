import { Module } from '@nestjs/common';
import { AsignacionCultivoController } from './asignacion-cultivo.controller';
import { AsignacionCultivoService } from './asignacion-cultivo.service';

@Module({
    imports:[],
    controllers:[AsignacionCultivoController],
    providers: [AsignacionCultivoService]
})
export class AsignacionCultivoModule {}
