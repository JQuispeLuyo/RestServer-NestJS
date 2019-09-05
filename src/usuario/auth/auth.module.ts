import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PersonaModule } from './../persona/persona.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PersonaModule,PassportModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
