import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Category } from '@ehc/common/entities';
import { CreateUser } from '@ehc/common/dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  fetchAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async fetchById(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async fetchByAlias(alias: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ alias });
    if (!user) {
      throw new NotFoundException(`User with alias ${alias} was not found`);
    }
    return user;
  }

  async fetchByCategory(categoryId: number): Promise<User[]> {
    const category = await this.categoryRepository.findOneBy({
      id: categoryId,
    });
    if (!category) {
      throw new NotFoundException(`Category with id ${categoryId} not found`);
    }
    return this.usersRepository.findBy({ categories: [category] });
  }

  async create(dto: CreateUser): Promise<User> {
    const user = this.usersRepository.create(dto);
    return this.usersRepository.save(user);
  }
}
