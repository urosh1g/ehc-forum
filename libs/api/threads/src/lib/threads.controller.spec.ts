import { Test } from '@nestjs/testing';
import { ThreadsController } from './threads.controller';
import { ThreadsService } from './threads.service';

describe('ThreadsController', () => {
  let controller: ThreadsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ThreadsService],
      controllers: [ThreadsController],
    }).compile();

    controller = module.get(ThreadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
