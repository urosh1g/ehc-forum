import { Category, Thread } from '@ehc/common/entities';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThread, UpdateThread, ThreadQuery } from '@ehc/common/dtos';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread) private threadRepository: Repository<Thread>
  ) {}

  private async tryFind(id: number): Promise<Thread> {
    const thread = await this.threadRepository.findOneBy({ id });
    if (!thread) {
      throw new NotFoundException(`Thread with id ${id} was not found`);
    }
    return thread;
  }

  fetchAll(query: ThreadQuery): Promise<Thread[]> {
    return this.threadRepository.find({ relations: query });
  }

  async fetchOne(id: number, query: ThreadQuery): Promise<Thread> {
    const thread = await this.threadRepository.findOne({
      where: { id },
      relations: query,
    });
    if (!thread) {
      throw new NotFoundException(`Thread with id ${id} was not found`);
    }
    return thread;
  }

  create(dto: CreateThread): Promise<Thread> {
    const thread = this.threadRepository.create(dto);
    thread.categories = dto.categoryIds.map((categoryId) => {
      return { id: categoryId } as Category
    });
    return this.threadRepository.save(thread);
  }

  async update(id: number, dto: UpdateThread): Promise<Thread> {
    return await this.threadRepository.save({
      id,
      ...dto,
    });
  }

  async delete(id: number): Promise<Thread> {
    const thread = await this.tryFind(id);
    this.threadRepository.delete(thread);
    return thread;
  }
}
