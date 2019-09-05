import { Module } from '@nestjs/common';
import { PersonaModule } from './persona/persona.module';
import { AsignacionPersonaModule } from './asignacion-persona/asignacion-persona.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports:[PersonaModule,AsignacionPersonaModule,LoginModule, AuthModule],
    providers: []
})
export class UsuarioModule {}
