import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '@ehc/common/entities';
import { CreateCategory, UpdateCategory } from '@ehc/common/dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('')
  fetchCategories(): Promise<Category[]> {
    return this.categoriesService.fetchAll();
  }

  @Get(':id')
  fetchById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoriesService.fetchById(id);
  }

  @Post('')
  create(@Body() dto: CreateCategory): Promise<Category> {
    return this.categoriesService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCategory
  ): Promise<Category> {
    return this.categoriesService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoriesService.delete(id);
  }
}
