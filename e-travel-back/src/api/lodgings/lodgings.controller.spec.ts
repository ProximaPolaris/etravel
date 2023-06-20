import { Test, TestingModule } from '@nestjs/testing';
import { LodgingsController } from './lodgings.controller';
import { LodgingsService } from './lodgings.service';

describe('LodgingsController', () => {
  let controller: LodgingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LodgingsController],
      providers: [LodgingsService],
    }).compile();

    controller = module.get<LodgingsController>(LodgingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
