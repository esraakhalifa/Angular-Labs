import { Component, input } from '@angular/core';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-wrapper',
  imports: [ToDoFormComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
tasks: string[] = [];


addTask(task:string)
{
  this.tasks.push(task);
  console.log("task is added.")
}
deleteTask(task:any)
{
  const index = this.tasks.indexOf(task);
  if (index > -1) {
    this.tasks.splice(index, 1);  // Removes the task at the given index
  }
  console.log('task deleted');
}

}
