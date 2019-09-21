import { Injectable } from '@nestjs/common';
import { PersonaService } from './../persona/persona.service';
import { Usuario } from './../login/interface/usuario';
import { JwtService } from '@nestjs/jwt';
var md5 = require('md5');

@Injectable()
export class AuthService {
    constructor(
      private readonly usersService: PersonaService,
      private readonly jwtService: JwtService
      ) {}

    async validateUser(username: string, pass: string): Promise<any> {
      const user: Usuario = await this.usersService.findByUserName(username);
      console.log(user);
      console.log(md5(pass));
      if (user && user.PSWPER === md5(pass)) {
        const { PSWPER, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: Usuario) {
      const payload = { username: user.USERPER, sub: user.IDPER };
      return {
        ...user,
        access_token: this.jwtService.sign(payload),
      };
    }
}
