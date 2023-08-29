import { Module } from '@nestjs/common';
import { ApiPostsController } from './posts.controller';
import { ApiPostsService } from './posts.service';

@Module({
  controllers: [ApiPostsController],
  providers: [ApiPostsService],
  exports: [ApiPostsService],
})
export class ApiPostsModule {}
