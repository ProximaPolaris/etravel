import { Test, TestingModule } from '@nestjs/testing';
import { TypeActivitiesController } from './type-activities.controller';
import { TypeActivitiesService } from './type-activities.service';

describe('TypeActivitiesController', () => {
  let controller: TypeActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeActivitiesController],
      providers: [TypeActivitiesService],
    }).compile();

    controller = module.get<TypeActivitiesController>(TypeActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
