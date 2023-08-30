import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '@ehc/common/entities';
import { CreateCategory, UpdateCategory, CategoryQuery } from '@ehc/common/dtos';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}
  fetchAll(query: CategoryQuery): Promise<Category[]> {
    return this.categoryRepository.find({
      relations: query
    });
  }

  async fetchById(id: number, query: CategoryQuery): Promise<Category> {
    const category = await this.categoryRepository.findOne({where: {id}, relations: query});
    if (!category) {
      throw new NotFoundException(`Category with id ${id} was not found`);
    }
    return category;
  }

  async create(dto: CreateCategory): Promise<Category> {
    const category = this.categoryRepository.create(dto);
    return this.categoryRepository.save(category);
  }

  async update(id: number, dto: UpdateCategory): Promise<Category> {
    await this.categoryRepository.update(id, dto);
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Category with id ${id} was not found`);
    }
    return category;
  }

  async delete(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Category with id ${id} was not found`);
    }
    this.categoryRepository.delete(id);
    return category;
  }
}
