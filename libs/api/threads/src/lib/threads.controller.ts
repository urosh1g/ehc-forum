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
import { ThreadsService } from './threads.service';
import { Thread } from '@ehc/common/entities';
import { CreateThread, UpdateThread, ThreadQuery } from '@ehc/common/dtos';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get('')
  fetchAll(@Query() query: ThreadQuery): Promise<Thread[]> {
    return this.threadsService.fetchAll(query);
  }

  @Get(':id')
  fetchOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: ThreadQuery
  ): Promise<Thread> {
    return this.threadsService.fetchOne(id, query);
  }

  @Post()
  create(@Body() dto: CreateThread): Promise<Thread> {
    return this.threadsService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateThread
  ): Promise<Thread> {
    return this.threadsService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<Thread> {
    return this.threadsService.delete(id);
  }
}
