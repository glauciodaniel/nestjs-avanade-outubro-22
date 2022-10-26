import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './createUser.dto';
export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
