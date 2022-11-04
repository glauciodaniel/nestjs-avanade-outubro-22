import { Injectable } from '@nestjs/common';
import { CreateChocolateDto } from './dto/create-chocolate.dto';
import { UpdateChocolateDto } from './dto/update-chocolate.dto';

@Injectable()
export class ChocolateService {
  create(createChocolateDto: CreateChocolateDto) {
    return 'This action adds a new chocolate';
  }

  findAll() {
    return `This action returns all chocolate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chocolate`;
  }

  update(id: number, updateChocolateDto: UpdateChocolateDto) {
    return `This action updates a #${id} chocolate`;
  }

  remove(id: number) {
    return `This action removes a #${id} chocolate`;
  }
}
