import { Test, TestingModule } from '@nestjs/testing';
import { TwitterController } from './twitter.controller';

describe('TwitterController', () => {
  let controller: TwitterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwitterController],
    }).compile();

    controller = module.get<TwitterController>(TwitterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
