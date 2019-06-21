import { DataI } from './interfaces/interfaces';
import { Informacion } from './model/informacion.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InformacionService {

    constructor(
        @InjectRepository(Informacion)
        private readonly informacionRepository:Repository<Informacion>,
        ){}

    async getAllInformacion(){
        return this.informacionRepository.find();
    }

    async getCabecerasInformacion(data:DataI){
        let sql = `select	I.IDINFO,
                            I.IDASIG,
                            I.TOTAREDET,
                            I.ESTAINFO, 
                            A.IDSECT
                        from INFORMACION.INFORMACION AS I 
                            inner join PERSONA.ASIGNACION_PERSONA AS A
                                ON A.IDASIGPER = I.IDASIG
                        where A.IDPER = ${data.IDPER} and I.FECINFO between '${data.FECINFOP}' and '${data.FECINFOU}'`;

        return this.informacionRepository.query(sql);
    }  
    
}
