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
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post, User } from '@ehc/common/entities';
import { CreatePost, UpdatePost } from '@ehc/common/dtos';
import { PostQuery } from '@ehc/common/dtos';
import { Public } from '@ehc/api/auth';
import { Request } from 'express';
import { JwtUserInfo } from '@ehc/common/interfaces';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Public()
  @Get('')
  fetchAll(@Query() query: PostQuery): Promise<Post[]> {
    return this.postsService.fetchAll(query);
  }

  @Get('/thread/:threadId')
  @Public()
  fetchByThread(@Param('threadId', ParseIntPipe)id: number, @Query() query: PostQuery): Promise<Post[]> {
    return this.postsService.fetchByThread(id, query);
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
  create(@Req() request: Request, @Body() dto: CreatePost): Promise<Post> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.postsService.create(dto, caller);
  }

  @Patch(':id')
  update(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePost
  ): Promise<Post> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.postsService.update(id, dto, caller);
  }

  @Delete(':id')
  delete(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number
  ): Promise<Post> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.postsService.delete(id, caller);
  }
}
