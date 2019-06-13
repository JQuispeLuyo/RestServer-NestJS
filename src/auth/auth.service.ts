import { PersonaDto } from './../persona/dto/persona.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PersonaService } from '../persona/persona.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: PersonaService,
        private readonly jwtService: JwtService
    ) { }


    public async signIn(persona: JwtPayload): Promise<PersonaDto | { status: number }> {
        return this.validateUser(persona).then((userData) => {
            if (!userData) {
                return { status: 404 };
            }
            let payload = `${userData.USERPER}${userData.NOMPER}`;
            const accessToken = this.jwtService.sign(payload);

            return {
                expires_in: 3600,
                access_token: accessToken,
                user_id: payload,
                status: 200
            };

        });
    }


    private async validateUser(userData: JwtPayload): Promise<PersonaDto> {
        return await this.userService.findByUserName(userData.USERPER);
    }





}
