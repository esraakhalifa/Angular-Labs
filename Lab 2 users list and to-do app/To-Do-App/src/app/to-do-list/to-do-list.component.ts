import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';

@Component({
  selector: 'app-to-do-list',
  imports: [ToDoItemComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() tasks: string[] = []; 
  @Output() sendTaskToParentToBeDeleted = new EventEmitter<string>();
  passTaskToParentToBeDeleted(task:any)
  {
    this.sendTaskToParentToBeDeleted.emit(task);
  }
  

}
