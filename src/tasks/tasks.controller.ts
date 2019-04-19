import { Controller, Get, Post, Put, Delete, Body, HttpCode, Param} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

import { Tasks } from './interfaces/tasks.interface';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @Get()
    getTasks(): Tasks[]{
        return this.tasksService.getTasks();
    };

    @Get(':idTask')
    getTask(@Param('idTask') idTask: string): Tasks{
        return this.tasksService.getTask(parseInt(idTask));
    };

    @Post()
    @HttpCode(500)
    createTasks(@Body() task: CreateTaskDto): string{
        console.log(task.title, task.description, task.done);
        return `Creando tarea ${task}`;
    };

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') idTaks): string {
        console.log(task,`ID: ${idTaks}`);
        return `Actualizando tarea`
    };

    @Delete(':id')
    deleteTask(@Param('id') idTaks): string {
        console.log(idTaks);
        return `Borrando tarea ${idTaks}`
    };

}


