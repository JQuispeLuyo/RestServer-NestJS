import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../auth/auth.service';

@Controller('login')
export class LoginController {

    constructor() { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        console.log(req.user);
        return req.user;
    }


    //constructor(private loginService: LoginService) { }

    // @Post('login')
    // login(@Body() data: Credential){
    //     return this.loginService.login(data);
    // }

}
