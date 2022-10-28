import { Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data): Promise<users> {
    const { name, email, password } = data;
    const user = await this.prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    if (!user) {
      throw new Error('Erro ao criar usuário!');
    }
    return user;
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
