import { Test, TestingModule } from '@nestjs/testing';
import { ChocolateService } from './chocolate.service';

describe('ChocolateService', () => {
  let service: ChocolateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChocolateService],
    }).compile();

    service = module.get<ChocolateService>(ChocolateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
