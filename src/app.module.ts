import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { CultivoController } from './cultivo/cultivo.controller';
import { CultivoService } from './cultivo/cultivo.service';
import { CultivoModule } from './cultivo/cultivo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonaModule, CultivoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
