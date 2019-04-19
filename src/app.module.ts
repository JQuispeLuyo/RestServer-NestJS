import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { Connection } from 'typeorm';


@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(), PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
