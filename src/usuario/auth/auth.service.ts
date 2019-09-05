import { Injectable } from '@nestjs/common';
import { PersonaService } from './../persona/persona.service';
import { Usuario } from './../login/interface/usuario';
var md5 = require('md5');

@Injectable()
export class AuthService {
    constructor(
      private readonly usersService: PersonaService) {}

    async validateUser(username: string, pass: string): Promise<any> {
      const user: Usuario = await this.usersService.findByUserName(username);
      console.log(user);
      if (user && user.PSWPER === pass) {
        const { PSWPER, ...result } = user;
        return result;
      }
      return null;
    }
}
