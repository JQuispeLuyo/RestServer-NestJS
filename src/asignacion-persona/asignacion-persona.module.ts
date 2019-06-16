import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AsignacionPersonaController } from './asignacion-persona.controller';
import { AsignacionPersonaService } from './asignacion-persona.service';
import { AsignacionPersona } from './model/asignacion-persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsignacionPersona])],
  controllers: [AsignacionPersonaController],
  providers: [AsignacionPersonaService]
})
export class AsignacionPersonaModule {}
