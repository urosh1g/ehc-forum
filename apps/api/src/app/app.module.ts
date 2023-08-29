import { Module } from '@nestjs/common';
import { DatabaseModule } from '@ehc/api/database';
import { UsersModule } from '@ehc/api/users';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
