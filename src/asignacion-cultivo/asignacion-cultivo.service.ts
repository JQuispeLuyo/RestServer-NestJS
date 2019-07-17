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
        return this.asigCultivoRepository.find();
    }

    async asigPersona(IDPER: string) {
        console.log(IDPER);
        let query = `SELECT	A.IDASIGPER,
                            AC.IDASIGCUL,
                            U.IDSECT,
                            C.*
                    FROM    PERSONA.ASIGNACION_PERSONA AS A 
                            INNER JOIN PERSONA.PERSONA AS P 
                                ON A.IDPER = P.IDPER 
                            INNER JOIN UBICACION.SECTOR AS U 
                                ON A.IDSECT = U.IDSECT
                            INNER JOIN	CULTIVO.ASIGNACION_CULTIVO as AC
                                ON AC.IDSECT = U.IDSECT
                            inner join CULTIVO.CULTIVO as C
                                on AC.IDCUL = C.IDCUL
                    where P.IDPER=${IDPER} and AC.ESTAASIGCUL = 'A'`;

        const asig = await this.asigCultivoRepository.query(query);
        return asig;
    }

}
