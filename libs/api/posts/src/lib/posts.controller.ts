import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post as HttpPost,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from '@ehc/common/entities';
import { CreatePost, UpdatePost } from '@ehc/common/dtos';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('')
  fetchAll(): Promise<Post[]> {
    return this.postsService.fetchAll();
  }

  @Get(':id')
  fetchOne(@Param('id', ParseIntPipe) id: number): Promise<Post> {
    return this.postsService.fetchOne(id);
  }

  @HttpPost()
  create(@Body() dto: CreatePost): Promise<Post> {
    return this.postsService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePost
  ): Promise<Post> {
    return this.postsService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe)id: number): Promise<Post> {
    return this.postsService.delete(id);
  }
}
