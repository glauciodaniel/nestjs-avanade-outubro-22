import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  async create(): Promise<string> {
    return 'Usuário criado com sucesso!';
  }

  async findAll(): Promise<string> {
    return 'Lista de usuários!';
  }

  async findOne(id: number): Promise<string> {
    return `Usuário ${id}!`;
  }

  async update(id: number, req: UpdateUserDTO): Promise<string> {
    return `Usuário ${id} atualizado com sucesso!`;
  }

  async remove(id: number): Promise<string> {
    return `Usuário ${id} deletado com sucesso!`;
  }
}
