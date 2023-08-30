import { Test } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '@ehc/common/entities';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PostsService],
      imports: [TypeOrmModule.forFeature([Post])],
    }).compile();

    service = module.get(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should insert', async () => {
    const post = await service.create({ title: 'title', body: 'text' });
    expect(post).toBeTruthy();
  });
});
