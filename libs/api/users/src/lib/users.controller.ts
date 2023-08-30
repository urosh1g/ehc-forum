import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@ehc/common/entities';
import { CreateUser } from '@ehc/common/dtos';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  fetchUsers(): Promise<User[]> {
    return this.usersService.fetchAll();
  }

  @Get('category/:id')
  fetchByCategory(
    @Param('id', ParseIntPipe) categoryId: number
  ): Promise<User[]> {
    return this.usersService.fetchByCategory(categoryId);
  }

  @Get(':id')
  fetchById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.fetchById(id);
  }

  @Post('')
  createUser(@Body() dto: CreateUser): Promise<User> {
    return this.usersService.create(dto);
  }
}
