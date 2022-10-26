import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async create(): Promise<string> {
    return 'Usuário criado com sucesso!';
  }
}
