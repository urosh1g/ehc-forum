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
  Req,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment, User } from '@ehc/common/entities';
import { CreateComment, UpdateComment, CommentQuery } from '@ehc/common/dtos';
import { Public } from '@ehc/api/auth';
import { JwtUserInfo } from '@ehc/common/interfaces';
import { Request } from 'express';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Public()
  @Get('')
  fetchAll(@Query() query: CommentQuery): Promise<Comment[]> {
    return this.commentsService.fetchAll(query);
  }

  @Public()
  @Get('/post/:postId')
  fetchByPost(@Param('postId', ParseIntPipe)postId: number, @Query() query: CommentQuery): Promise<Comment[]> {
    return this.commentsService.fetchByPost(postId, query);
  }

  @Public()
  @Get(':id')
  fetchOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: CommentQuery
  ): Promise<Comment> {
    return this.commentsService.fetchOne(id, query);
  }

  @Post('')
  create(
    @Body() dto: CreateComment,
    @Req() request: Request
  ): Promise<Comment> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.commentsService.create(dto, caller);
  }

  @Patch(':id')
  update(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateComment
  ): Promise<Comment> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.commentsService.update(id, dto, caller);
  }

  @Delete(':id')
  delete(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number
  ): Promise<Comment> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.commentsService.delete(id, caller);
  }
}
