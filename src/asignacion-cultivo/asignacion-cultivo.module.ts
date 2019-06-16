import { AsignacionCultivo } from './model/asignacion-cultivo.entity';
import { Module } from '@nestjs/common';
import { AsignacionCultivoController } from './asignacion-cultivo.controller';
import { AsignacionCultivoService } from './asignacion-cultivo.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([AsignacionCultivo])],
    controllers:[AsignacionCultivoController],
    providers: [AsignacionCultivoService]
})
export class AsignacionCultivoModule {}
