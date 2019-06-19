import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { CultivoModule } from './cultivo/cultivo.module';;
import { DetalleInformacionModule } from './detalle-informacion/detalle-informacion.module';
import { AsignacionCultivoModule } from './asignacion-cultivo/asignacion-cultivo.module';
import { AsignacionPersonaModule } from './asignacion-persona/asignacion-persona.module';
import { SectorModule } from './sector/sector.module';
import { InformacionModule } from './informacion/informacion.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonaModule, CultivoModule, DetalleInformacionModule, AsignacionCultivoModule, AsignacionPersonaModule, SectorModule, InformacionModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
