import { Module } from '@nestjs/common';
import { ChocolateService } from './chocolate.service';
import { ChocolateController } from './chocolate.controller';

@Module({
  controllers: [ChocolateController],
  providers: [ChocolateService]
})
export class ChocolateModule {}
