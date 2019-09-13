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
  imports: [TypeOrmModule.forRoot({
        "type": "oracle",
        "username": "TEAM08",
        "password": "CropAW-Pass",
        "connectString" : "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=137.135.84.103)(PORT=1521))(CONNECT_DATA=(SID=XE)))",
        "synchronize": false,
        "logging": true,
        "entities": [__dirname + '/**/**.entity{.ts,.js}']
    }), 
    CultivoModule, DetalleInformacionModule, AsignacionCultivoModule, 
    SectorModule, InformacionModule, UsuarioModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
