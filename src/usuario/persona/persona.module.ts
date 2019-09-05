import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './model/persona.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Persona]),],
    controllers: [PersonaController],
    exports:[PersonaService],
    providers: [PersonaService]
})
export class PersonaModule { }
