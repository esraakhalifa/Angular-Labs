import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-to-do-item',
  imports: [],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
  @Input() taskItem:any;
  @Output() sendTaskToParent = new EventEmitter<string>();

  handleDeletedTask(task:string)
  {
    this.sendTaskToParent.emit(task);
  }
  

}
