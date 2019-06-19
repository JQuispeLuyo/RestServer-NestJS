import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { InformacionController } from './informacion.controller';
import { InformacionService } from './informacion.service';
import { Informacion } from './model/informacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Informacion])],
  controllers: [InformacionController],
  providers: [InformacionService]
})
export class InformacionModule {}
