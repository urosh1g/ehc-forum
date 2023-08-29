import { Test } from '@nestjs/testing';
import { ThreadsService } from './threads.service';

describe('ThreadsService', () => {
  let service: ThreadsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ThreadsService],
    }).compile();

    service = module.get(ThreadsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
