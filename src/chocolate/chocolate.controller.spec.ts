import { Test, TestingModule } from '@nestjs/testing';
import { ChocolateController } from './chocolate.controller';
import { ChocolateService } from './chocolate.service';

describe('ChocolateController', () => {
  let controller: ChocolateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChocolateController],
      providers: [ChocolateService],
    }).compile();

    controller = module.get<ChocolateController>(ChocolateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
