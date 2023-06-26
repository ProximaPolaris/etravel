import { Test, TestingModule } from '@nestjs/testing';
import { ContinentsService } from './continents.service';

describe('ContinentsService', () => {
  let service: ContinentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContinentsService],
    }).compile();

    service = module.get<ContinentsService>(ContinentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
