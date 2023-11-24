import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { UnitOfWork } from '../postgres/uow';

@Module({
  controllers: [TasksController],
  providers: [TasksService, UnitOfWork],
})
export class TasksModule {}
