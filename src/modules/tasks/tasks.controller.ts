import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './../../common/dtos/task-dto.dto';
import { Task } from 'src/common/entities/task.entity';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @ApiParam({ name: 'id' })
  @Get(':id')
  getTask(@Param('id') id: number): Promise<Task> {
    return this.tasksService.getTask(id);
  }

  @ApiBody({ type: TaskDto })
  @Post()
  createTask(@Body() task: TaskDto): Promise<Task> {
    return this.tasksService.createTask(task);
  }

  @Post(':id')
  @ApiBody({ type: TaskDto })
  updateTask(
    @Param('id') id: number,
    @Body() task: TaskDto,
  ): Promise<Task | string> {
    return this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<Task | string> {
    return this.tasksService.deleteTask(id);
  }
}
