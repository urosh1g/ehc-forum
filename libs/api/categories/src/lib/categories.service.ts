import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '@ehc/common/entities';
import { CreateCategory } from '@ehc/common/dtos';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}
  fetchAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async fetchById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({id});
    if(!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
  }

  async create(dto: CreateCategory): Promise<Category> {
    const category = this.categoryRepository.create(dto);
    return this.categoryRepository.save(category);
  }
}
