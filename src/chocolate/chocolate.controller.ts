import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChocolateService } from './chocolate.service';
import { CreateChocolateDto } from './dto/create-chocolate.dto';
import { UpdateChocolateDto } from './dto/update-chocolate.dto';

@Controller('chocolate')
export class ChocolateController {
  constructor(private readonly chocolateService: ChocolateService) {}

  @Post()
  create(@Body() createChocolateDto: CreateChocolateDto) {
    return this.chocolateService.create(createChocolateDto);
  }

  @Get()
  findAll() {
    return this.chocolateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chocolateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChocolateDto: UpdateChocolateDto,
  ) {
    return this.chocolateService.update(+id, updateChocolateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chocolateService.remove(+id);
  }
}
