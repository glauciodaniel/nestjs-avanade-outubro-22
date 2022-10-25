import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // está apenas redirecionando o usuário para o serviço correto.
    return this.appService.getHello();
  }
}
