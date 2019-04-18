import { Injectable } from '@nestjs/common';
import { Tasks } from '../interfaces/tasks.interface'

@Injectable()
export class TasksService {

    tasks: Tasks[] = [
        {
            id: 1,
            title: "Testing",
            description: "Testing description",
            done: false
        },
        {
            id: 2,
            title: "Testing2",
            description: "Testing description",
            done: false
        },
        {
            id: 3,
            title: "Testing3",
            description: "Testing description",
            done: false
        }
    ];

    getTasks(): Tasks[]{
        return this.tasks;
    }

    getTask(id: number): Tasks{
        return this.tasks.find(task => task.id === id);
    }


}
