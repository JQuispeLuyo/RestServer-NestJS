import { AsignacionCultivo } from './model/asignacion-cultivo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionCultivoService {

    constructor(
        @InjectRepository(AsignacionCultivo)
        private asigCultivoRepository: Repository<AsignacionCultivo>,
    ) { }

    async findAll(){
        return this.asigCultivoRepository.createQueryBuilder("asignacionCultivos")
        .innerJoinAndSelect("asignacionCultivos.cultivo", "cultivo") 
        .innerJoinAndSelect("asignacionCultivos.sector", "sector")
        .getMany();
    }

    async asigPersona(IDPER: string) {
        console.log(IDPER);
        let query = `SELECT	A.IDASIGPER,
                            AC.IDASIGCUL,
                            U.IDSECT,
                            C.*
                    FROM    ASIGNACION_PERSONA A 
                            INNER JOIN PERSONA P 
                                ON A.IDPER = P.IDPER 
                            INNER JOIN SECTOR U 
                                ON A.IDSECT = U.IDSECT
                            INNER JOIN ASIGNACION_CULTIVO AC
                                ON AC.IDSECT = U.IDSECT
                            inner join CULTIVO C
                                on AC.IDCUL = C.IDCUL
                    where P.IDPER=${IDPER} and AC.ESTAASIGCUL = 'A'`;

        const asig = await this.asigCultivoRepository.query(query);
        return asig;
    }
    
}
