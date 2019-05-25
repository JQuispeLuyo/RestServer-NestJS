import { DetalleInformacionDto } from './dto/detalle-informacion.dto';
import { DetalleInformacion } from './model/detalle-informacion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DetalleInformacionService {

    constructor(
        @InjectRepository(DetalleInformacion)
        private readonly detInfoRepository:Repository<DetalleInformacion>,
    ){}


    async findAll(){
        return await this.detInfoRepository.find();
    }

    async create(data: Partial<DetalleInformacionDto>){
        console.log(data);
        const detalleInformacion = await this.detInfoRepository.create(data);
        await this.detInfoRepository.save(detalleInformacion);
        return detalleInformacion;
    }

    


}
