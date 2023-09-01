import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from '@ehc/common/entities';
import { CreateComment, UpdateComment, CommentQuery } from '@ehc/common/dtos';

@Controller('comments')
@UseInterceptors(ClassSerializerInterceptor)
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get('')
  fetchAll(@Query()query: CommentQuery): Promise<Comment[]> {
    return this.commentsService.fetchAll(query);
  }

  @Get(':id')
  fetchOne(@Param('id', ParseIntPipe)id: number, @Query()query: CommentQuery): Promise<Comment> {
    return this.commentsService.fetchOne(id, query);
  }

  @Post('')
  create(@Body()dto: CreateComment): Promise<Comment> {
    return this.commentsService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe)id: number, @Body()dto: UpdateComment): Promise<Comment> {
    return this.commentsService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe)id: number): Promise<Comment> {
    return this.commentsService.delete(id);
  }
}
