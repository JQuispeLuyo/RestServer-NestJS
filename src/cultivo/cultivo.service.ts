import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Cultivo } from './model/cultivo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CultivoService {

    constructor(
        @InjectRepository(Cultivo)
        private readonly cultivoRepository: Repository<Cultivo>,
    ){}

    async getAll(){
        return this.cultivoRepository.find();
    }

    async getCultivo(IDCUL: number){
        return this.cultivoRepository.findOne({IDCUL});
    }

    async getTipCultivo(TIPCUL: string){
        return this.cultivoRepository.find({TIPCUL});
    }

}