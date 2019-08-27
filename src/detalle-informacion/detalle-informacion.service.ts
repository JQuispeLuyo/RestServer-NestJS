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
                        from INFORMACION I 
                            inner join DETALLE_INFORMACION ID
                                ON I.IDINFO = ID.IDINFO
                            inner join ASIGNACION_PERSONA A
                                ON A.IDASIGPER = I.IDASIG
                        where A.IDPER = ${data.IDPER} 
                            and I.FECINFO 
                                between ADD_MONTHS(TRUNC(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24), 'MM'),-1)
                                and ADD_MONTHS(TRUNC(LAST_DAY(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24))),-1)`;

        return this.detInfoRepository.query(sql);
    }

    async getDetallesActual(data: DataI){
        let sql = `select	ID.*
                    from INFORMACION I 
                        inner join DETALLE_INFORMACION ID
                            ON I.IDINFO = ID.IDINFO
                        inner join ASIGNACION_PERSONA A
                            ON A.IDASIGPER = I.IDASIG
                    where A.IDPER = ${data.IDPER}
                        and I.FECINFO 
                            between TRUNC(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24), 'MM')
                            and TRUNC(LAST_DAY(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24)))`;

        return this.detInfoRepository.query(sql);
    }




}
