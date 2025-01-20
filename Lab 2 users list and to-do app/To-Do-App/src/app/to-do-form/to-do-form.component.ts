import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  imports: [],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  @Output() sendTaskToParentToBeAdded = new EventEmitter<string>();

  handleEnteredTask(task:any)
  {
    console.log(task);
    this.sendTaskToParentToBeAdded.emit(task);
  }

}
