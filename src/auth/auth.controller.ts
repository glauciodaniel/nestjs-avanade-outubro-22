import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async authLogin(@Body() req) {
    const { login, password } = req;
    return this.authService.authLogin(login, password);
  }
}
