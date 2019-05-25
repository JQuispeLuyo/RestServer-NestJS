import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleInformacion } from './model/detalle-informacion.entity'
import { DetalleInformacionController } from './detalle-informacion.controller';
import { DetalleInformacionService } from './detalle-informacion.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([DetalleInformacion]),
    ],
    controllers: [
        DetalleInformacionController
    ],
    providers: [
        DetalleInformacionService
    ]
})
export class DetalleInformacionModule {}
