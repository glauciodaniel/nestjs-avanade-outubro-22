import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // criar
  @Post()
  create(@Body() req: CreateUserDTO) {
    return this.usersService.create(req);
  }
  // listar todos  localhost:3000/users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  // listar um  localhost:3000/users/1
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  // atualizar
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() req: UpdateUserDTO) {
    return this.usersService.update(id, req);
  }
  // deletar
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
