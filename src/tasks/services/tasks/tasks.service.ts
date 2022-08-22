import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from 'src/tasks/dto/createTask.dtos';
import { UpdateTaskDto } from 'src/tasks/dto/updateTask.dtos';
import { Task } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  getTasks() {
    return this.taskRepository.find();
  }

  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  createTask(createTaskDto: CreateTaskDto) {
    const newTask = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(newTask);
  }

  findTaskById(id: string) {
    return this.taskRepository.findOneOrFail({
      where: {
        id: id,
      },
    });
  }

  updateTask(id: string, updateTaskDto: UpdateTaskDto) {
    this.findTaskById(id);

    return this.taskRepository.update(id, updateTaskDto);
  }

  deleteTask(id: string) {
    console.log(id);
    return this.taskRepository.delete(id);
  }
}
