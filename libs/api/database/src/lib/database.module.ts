import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'rwa',
    password: 'rwa',
    database: 'rwa',
    entities: [],
    synchronize: true,
    autoLoadEntities: true
  })],
  controllers: [],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
