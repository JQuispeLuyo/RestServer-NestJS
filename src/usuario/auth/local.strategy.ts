import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService) {
        super();
      }
    
    async validate(USERPER: string, PSWPER: string): Promise<any> {
        console.log(USERPER);
        const user = await this.authService.validateUser(USERPER, PSWPER);
        if (!user) {
          throw new UnauthorizedException();
        }
        return user;
    }
}
