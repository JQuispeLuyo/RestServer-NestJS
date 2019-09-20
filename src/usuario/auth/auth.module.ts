import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PersonaModule } from './../persona/persona.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategry } from './jwt.strategy';

@Module({
  imports:[PersonaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),],
  providers: [AuthService, LocalStrategy, JwtStrategry],
  exports: [AuthService],
})
export class AuthModule {}
