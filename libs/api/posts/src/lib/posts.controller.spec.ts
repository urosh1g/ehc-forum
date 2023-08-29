import { Test } from '@nestjs/testing';
import { ApiPostsController } from './posts.controller';
import { ApiPostsService } from './posts.service';

describe('ApiPostsController', () => {
  let controller: ApiPostsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiPostsService],
      controllers: [ApiPostsController],
    }).compile();

    controller = module.get(ApiPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
