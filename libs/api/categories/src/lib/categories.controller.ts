import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '../../../../common/category/src/lib/category.entity';
import { CreateCategory } from '@ehc/common/category';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('')
  fetchCategories(): Promise<Category[]> {
    return this.categoriesService.fetchAll();
  }

  @Get(':id')
  fetchById(@Param('id', ParseIntPipe)id: number): Promise<Category> {
    return this.categoriesService.fetchById(id);
  }

  @Post('')
  create(@Body() dto: CreateCategory): Promise<Category> {
    return this.categoriesService.create(dto);
  }
}
