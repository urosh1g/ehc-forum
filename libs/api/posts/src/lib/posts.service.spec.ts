import { Test } from '@nestjs/testing';
import { ApiPostsService } from './posts.service';

describe('ApiPostsService', () => {
  let service: ApiPostsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiPostsService],
    }).compile();

    service = module.get(ApiPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
