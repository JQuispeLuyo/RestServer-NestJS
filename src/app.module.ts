import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultivoModule } from './cultivo/cultivo.module';;
import { DetalleInformacionModule } from './detalle-informacion/detalle-informacion.module';
import { AsignacionCultivoModule } from './asignacion-cultivo/asignacion-cultivo.module';
import { SectorModule } from './sector/sector.module';
import { InformacionModule } from './informacion/informacion.module';
import { UsuarioModule } from './usuario/usuario.module';;

@Module({
  imports: [TypeOrmModule.forRoot(), 
    CultivoModule, DetalleInformacionModule, AsignacionCultivoModule, 
    SectorModule, InformacionModule, UsuarioModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
