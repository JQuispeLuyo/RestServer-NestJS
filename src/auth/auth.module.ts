import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: 3600
      }
    }),
  ],
  
})
export class AuthModule { }
