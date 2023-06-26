import { Test, TestingModule } from '@nestjs/testing';
import { ContinentsController } from './continents.controller';
import { ContinentsService } from './continents.service';

describe('ContinentsController', () => {
  let controller: ContinentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContinentsController],
      providers: [ContinentsService],
    }).compile();

    controller = module.get<ContinentsController>(ContinentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
