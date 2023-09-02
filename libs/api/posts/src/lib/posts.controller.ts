import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post as HttpPost,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from '@ehc/common/entities';
import { CreatePost, UpdatePost } from '@ehc/common/dtos';
import { PostQuery } from '@ehc/common/dtos';
import { Public } from '@ehc/api/auth';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Public()
  @Get('')
  fetchAll(@Query() query: PostQuery): Promise<Post[]> {
    return this.postsService.fetchAll(query);
  }

  @Public()
  @Get(':id')
  fetchOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: PostQuery
  ): Promise<Post> {
    return this.postsService.fetchOne(id, query);
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
  delete(@Param('id', ParseIntPipe) id: number): Promise<Post> {
    return this.postsService.delete(id);
  }
}
