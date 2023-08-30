import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '@ehc/common/entities';
import { CategoryQuery, CreateCategory, UpdateCategory } from '@ehc/common/dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('')
  fetchCategories(@Query() query: CategoryQuery): Promise<Category[]> {
    return this.categoriesService.fetchAll(query);
  }

  @Get(':id')
  fetchById(@Param('id', ParseIntPipe) id: number, @Query() query: CategoryQuery): Promise<Category> {
    return this.categoriesService.fetchById(id, query);
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
