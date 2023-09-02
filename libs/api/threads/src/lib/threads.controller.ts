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
import { ThreadsService } from './threads.service';
import { Thread, User } from '@ehc/common/entities';
import { CreateThread, UpdateThread, ThreadQuery } from '@ehc/common/dtos';
import { Public } from '@ehc/api/auth';
import { Request } from 'express';
import { JwtUserInfo } from '@ehc/common/interfaces';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Public()
  @Get('')
  fetchAll(@Query() query: ThreadQuery): Promise<Thread[]> {
    return this.threadsService.fetchAll(query);
  }

  @Public()
  @Get(':id')
  fetchOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: ThreadQuery
  ): Promise<Thread> {
    return this.threadsService.fetchOne(id, query);
  }

  @Post()
  create(@Req() request: Request, @Body() dto: CreateThread): Promise<Thread> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.threadsService.create(dto);
  }

  @Patch(':id')
  update(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateThread
  ): Promise<Thread> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.threadsService.update(id, dto);
  }

  @Delete(':id')
  delete(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number
  ): Promise<Thread> {
    const user = request.user! as JwtUserInfo;
    const caller = { id: user.userId, alias: user.alias } as User;
    return this.threadsService.delete(id);
  }
}
