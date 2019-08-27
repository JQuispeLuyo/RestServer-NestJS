import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AsignacionPersonaController } from './asignacion-persona.controller';
import { AsignacionPersonaService } from './asignacion-persona.service';
import { AsignacionPersona } from './model/asignacion-persona.entity';
import { Persona } from './../persona/model/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsignacionPersona, Persona])],
  controllers: [AsignacionPersonaController],
  providers: [AsignacionPersonaService]
})
export class AsignacionPersonaModule {}
