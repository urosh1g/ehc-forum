import { Module } from '@nestjs/common';
import { DatabaseModule } from '@ehc/api/database';
import { UsersModule } from '@ehc/api/users';
import { CategoriesModule } from '@ehc/api/categories';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, UsersModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
