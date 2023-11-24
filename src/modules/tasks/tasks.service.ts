import { Injectable } from '@nestjs/common';
import { TaskDto } from './../../common/dtos/task-dto.dto';
import { Task } from 'src/common/entities/task.entity';
import { UnitOfWork } from '../postgres/uow';
@Injectable()
export class TasksService {
  constructor(private readonly uow: UnitOfWork) {}

  async getTask(id: number): Promise<Task> {
    return this.uow.getRepository(Task).findOneBy({ id: id });
  }

  async createTask(task: TaskDto): Promise<Task> {
    return this.uow.getRepository(Task).save(task);
  }

  async getTasks(): Promise<Task[]> {
    return this.uow.getRepository(Task).find();
  }

  async updateTask(id: number, task: TaskDto): Promise<Task | string> {
    const existingTask = this.uow
      .getRepository(Task)
      .findOne({ where: { id: id } });
    if (existingTask) {
      await this.uow.getRepository(Task).update(id, task);
      return this.uow.getRepository(Task).findOneBy({ id: id });
    }
    return 'Task not found';
  }

  async deleteTask(id: number): Promise<Task | string> {
    const task = this.uow.getRepository(Task).findOneBy({ id: id });
    if (task) {
      this.uow.getRepository(Task).delete(id);
      return task;
    }
    return "Task doesn't exist";
  }
}
