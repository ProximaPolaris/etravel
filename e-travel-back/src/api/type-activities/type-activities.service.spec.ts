import { Test, TestingModule } from '@nestjs/testing';
import { TypeActivitiesService } from './type-activities.service';

describe('TypeActivitiesService', () => {
  let service: TypeActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeActivitiesService],
    }).compile();

    service = module.get<TypeActivitiesService>(TypeActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
