import { Module } from '@nestjs/common';
import { AsignacionPersonaController } from './asignacion-persona.controller';
import { AsignacionPersonaService } from './asignacion-persona.service';

@Module({
  controllers: [AsignacionPersonaController],
  providers: [AsignacionPersonaService]
})
export class AsignacionPersonaModule {}
