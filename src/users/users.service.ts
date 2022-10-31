import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async verifyUserExists(email: string, errorUser: boolean): Promise<boolean> {
    const user = await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (user && errorUser) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: 'Usuário já existe!',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    if (!user && errorUser) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: 'Usuário não existe!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return user ? true : false;
  }

  async create(data: CreateUserDTO): Promise<users> {
    const { name, email, password } = data;

    //busca pra saber se o usuário já existe.
    //findUnique é um método do prisma que busca um usuário pelo campo único por exemplo email.
    //findFirst é um método do prisma que busca o primeiro registro que encontrar.

    const user = await this.prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: 'Erro ao criar usuário!',
        },
        HttpStatus.FORBIDDEN,
      );
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
