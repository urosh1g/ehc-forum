import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from '@ehc/common/entities';
import { CategoriesModule } from '@ehc/api/categories';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => CategoriesModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
