import { Module } from '@nestjs/common';
import { ThreadsController } from './threads.controller';
import { ThreadsService } from './threads.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thread } from '@ehc/common/entities'

@Module({
  imports: [TypeOrmModule.forFeature([Thread])],
  controllers: [ThreadsController],
  providers: [ThreadsService],
  exports: [ThreadsService],
})
export class ThreadsModule {}
