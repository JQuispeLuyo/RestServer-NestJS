import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { CultivoModule } from './cultivo/cultivo.module';;
import { DetalleInformacionModule } from './detalle-informacion/detalle-informacion.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonaModule, CultivoModule, DetalleInformacionModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
