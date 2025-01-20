import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() sendToParent = new EventEmitter<string>();
  @Output() resetEvent = new EventEmitter<void>();

  showReset = false; 
  handleSearchedItem(email: string) {
    console.log(email);
    this.sendToParent.emit(email);
    this.showReset = email.trim().length > 0; 
  }
  resetSearch(input: HTMLInputElement) {
    input.value = ''; // Clear input field
    this.showReset = false;
    this.resetEvent.emit(); // Notify parent to reset the user list
  }

}
