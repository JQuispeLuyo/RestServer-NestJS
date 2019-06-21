import { DataI } from './../informacion/interfaces/interfaces';
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

        const detalleInformacion = await this.detInfoRepository.create(data);
        await this.detInfoRepository.save(detalleInformacion);
        return detalleInformacion;
    }


    async getTotalAnterior(data: DataI){
        let sql = `select	I.IDINFO,
                            I.FECINFO,
                            I.ESTAINFO, 
                            ID.IDASIGCUL,
                            ID.VERDMES,
                            ID.FECCOS
                        from INFORMACION.INFORMACION AS I 
                            inner join INFORMACION.DETALLE_INFORMACION AS ID
                                ON I.IDINFO = ID.IDINFO
                            inner join PERSONA.ASIGNACION_PERSONA AS A
                                ON A.IDASIGPER = I.IDASIG
                        where A.IDPER = ${data.IDPER} and I.FECINFO between '${data.FECINFOP}' and '${data.FECINFOU}'`;

        return this.detInfoRepository.query(sql);
    }

    async getDetallesActual(data: DataI){
        let sql = `select	ID.*
                        from INFORMACION.INFORMACION AS I 
                            inner join INFORMACION.DETALLE_INFORMACION AS ID
                                ON I.IDINFO = ID.IDINFO
                            inner join PERSONA.ASIGNACION_PERSONA AS A
                                ON A.IDASIGPER = I.IDASIG
                        where A.IDPER = ${data.IDPER} and I.FECINFO between '${data.FECINFOP}' and '${data.FECINFOU}'`;

        return this.detInfoRepository.query(sql);
    }




}
