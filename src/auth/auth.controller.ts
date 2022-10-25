import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async authLogin(@Body() req) {
    const { login, password } = req;
    console.log('Login: ', login);
    console.log('Senha: ', password);
    return this.authService.authLogin(login, password);
  }
}
