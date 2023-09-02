import { Comment, Post, User } from '@ehc/common/entities';
import { CreateComment, UpdateComment, CommentQuery } from '@ehc/common/dtos';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentsRepository: Repository<Comment>
  ) {}

  fetchAll(query: CommentQuery): Promise<Comment[]> {
    return this.commentsRepository.find({
      relations: query,
    });
  }

  async fetchOne(id: number, query: CommentQuery): Promise<Comment> {
    const comment = await this.commentsRepository.findOne({
      where: { id },
      relations: query,
    });
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} was not found`);
    }
    return comment;
  }

  create(dto: CreateComment): Promise<Comment> {
    const comment = this.commentsRepository.create(dto);
    comment.author = { id: dto.authorId } as User;
    comment.post = { id: dto.postId } as Post;
    return this.commentsRepository.save(comment);
  }

  async update(id: number, dto: UpdateComment): Promise<Comment> {
    const comment = await this.commentsRepository.findOneBy({ id });
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} was not found`);
    }
    await this.commentsRepository.update(id, dto);
    return (await this.commentsRepository.findOneBy({ id }))!;
  }

  async delete(id: number): Promise<Comment> {
    const comment = await this.commentsRepository.findOneBy({ id });
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} was not found`);
    }
    this.commentsRepository.delete(id);
    return comment;
  }
}
