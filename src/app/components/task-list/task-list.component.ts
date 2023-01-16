import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  //TODO: Reformular como una lista de tareas
  task1: ITask = {
    title: 'Task 1',
    description: 'Descripction 1',
    completed: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: 'Task 2',
    description: 'Descripction 2',
    completed: true,
    level: Levels.Info
  }

  deleteTask(task: ITask) {
    //TODO: Sustituir por un splice para eliminar de la lista de tareas
    alert(`Se procede a eliminar la tarea: ${task.title}`);
  }
}
