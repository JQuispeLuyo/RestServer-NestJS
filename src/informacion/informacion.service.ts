import { DataI } from './interfaces/interfaces';
import { Informacion } from './model/informacion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InformacionService {

    constructor(
        @InjectRepository(Informacion)
        private readonly informacionRepository: Repository<Informacion>,
    ) { }

    async getAllInformacion() {
        return this.informacionRepository.find();
    }

    async getCabecerasInformacion(data: DataI) {
        let sql = `select	I.IDINFO,
                            I.IDASIG,
                            I.TOTAREDET,
                            I.ESTAINFO, 
                            A.IDSECT
                        from INFORMACION I 
                            inner join ASIGNACION_PERSONA A
                                ON A.IDASIGPER = I.IDASIG
                        where A.IDPER = ${data.IDPER}
                        and I.FECINFO 
                        between TRUNC(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24), 'MM') 
                        and TRUNC(LAST_DAY(CAST(sys_extract_utc(SYSTIMESTAMP) AS DATE)-(5/24)))`;

        // return this.informacionRepository.createQueryBuilder("informacion")
        // .innerJoin("informacion.IDASIG", "IDASIGPER");
        return this.informacionRepository.query(sql);
    }

    async getInformacionRel() {
        return this.informacionRepository.createQueryBuilder("informacion")
        .innerJoinAndSelect("informacion.detalleInformacion", "detalleInformacion")
        .getOne();
        // return this.informacionRepository.createQueryBuilder("informacion")
        // .innerJoin("informacion.IDASIG", "IDASIGPER");
       //return this.informacionRepository.query(sql);
    }
}
