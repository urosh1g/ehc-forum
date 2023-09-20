import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@ehc/common/entities';
import { CreateUser } from '@ehc/common/dtos';
import { Public } from '@ehc/api/auth';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get('')
  fetchUsers(): Promise<User[]> {
    return this.usersService.fetchAll();
  }

  @Get('category/:id')
  @Public()
  fetchByCategory(
    @Param('id', ParseIntPipe) categoryId: number
  ): Promise<User[]> {
    return this.usersService.fetchByCategory(categoryId);
  }

  @Get(':id')
  @Public()
  fetchById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.fetchById(id);
  }

  @Post('')
  @Public()
  createUser(@Body() dto: CreateUser): Promise<User> {
    return this.usersService.create(dto);
  }
}
