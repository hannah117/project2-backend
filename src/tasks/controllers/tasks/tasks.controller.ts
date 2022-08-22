import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from 'src/tasks/dto/createTask.dtos';
import { TasksService } from 'src/tasks/services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get('task/:id')
  async findTaskById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.taskService.findTaskById(id);
  }

  @Post('task')
  @UsePipes(ValidationPipe)
  createtasks(@Body() createtaskDto: CreateTaskDto) {
    return this.taskService.createTask(createtaskDto);
  }

  @Put('task/:id')
  @UsePipes(ValidationPipe)
  updateTask(@Body() createtaskDto: CreateTaskDto) {
    return this.taskService.createTask(createtaskDto);
  }

  @Delete('task/:id')
  deleteTask(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.taskService.deleteTask(id);
  }
}
