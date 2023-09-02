import { Module } from '@nestjs/common';
import { DatabaseModule } from '@ehc/api/database';
import { UsersModule } from '@ehc/api/users';
import { CategoriesModule } from '@ehc/api/categories';
import { PostsModule } from '@ehc/api/posts';
import { ThreadsModule } from '@ehc/api/threads';
import { CommentsModule } from '@ehc/api/comments';
import { AuthModule } from '@ehc/api/auth';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    CategoriesModule,
    PostsModule,
    ThreadsModule,
    CommentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
