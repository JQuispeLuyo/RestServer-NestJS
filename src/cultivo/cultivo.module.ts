import { Module } from '@nestjs/common';
import { CultivoController } from './cultivo.controller';
import { CultivoService } from './cultivo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cultivo } from './model/cultivo.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cultivo])
    ],
    controllers: [
        CultivoController
    ],
    providers: [
        CultivoService
    ]
})
export class CultivoModule {}
