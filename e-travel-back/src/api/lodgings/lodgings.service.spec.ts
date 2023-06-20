import { Test, TestingModule } from '@nestjs/testing';
import { LodgingsService } from './lodgings.service';

describe('LodgingsService', () => {
  let service: LodgingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LodgingsService],
    }).compile();

    service = module.get<LodgingsService>(LodgingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
