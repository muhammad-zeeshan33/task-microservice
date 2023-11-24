import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresModule } from './modules/postgres/postgres.module';

@Module({
  imports: [PostgresModule, TypeOrmModule.forFeature(), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
