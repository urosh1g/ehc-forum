import { CreatePost, UpdatePost } from '@ehc/common/dtos';
import { Category, Post, Thread } from '@ehc/common/entities';
import { PostQuery } from '@ehc/common/dtos';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {}

  fetchAll(query: PostQuery): Promise<Post[]> {
    return this.postRepository.find({
      relations: query,
    });
  }
  async fetchOne(id: number, query: PostQuery): Promise<Post> {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: query,
    });
    if (!post) {
      throw new NotFoundException(`Post with id ${id} was not found`);
    }
    return post;
  }

  async create(dto: CreatePost): Promise<Post> {
    const post = this.postRepository.create(dto);
    let categories = dto.categoryIds.map((id) => {
      let category = new Category();
      category.id = id;
      return category;
    });
    post.categories = categories;
    post.thread = { id: dto.threadId } as Thread;
    return await this.postRepository.save(post);
  }
  async update(id: number, dto: UpdatePost): Promise<Post> {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException(`Post with id ${id} was not found`);
    }
    await this.postRepository.update(id, dto);
    return (await this.postRepository.findOneBy({ id }))!;
  }

  async delete(id: number): Promise<Post> {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException(`Post with id ${id} was not found`);
    }
    this.postRepository.delete(id);
    return post;
  }
}
