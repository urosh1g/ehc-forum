import { Module } from '@nestjs/common';
import { DatabaseModule } from '@ehc/api/database';
import { UsersModule } from '@ehc/api/users';
import { CategoriesModule } from '@ehc/api/categories';
import { PostsModule } from '@ehc/api/posts'

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, UsersModule, CategoriesModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
