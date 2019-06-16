import { Sector } from './model/sector.entity';
import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sector])],
  providers: [SectorService],
  controllers: [SectorController]
})
export class SectorModule {}
