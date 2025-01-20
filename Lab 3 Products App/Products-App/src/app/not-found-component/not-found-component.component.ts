import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-not-found-component',
  imports: [RouterModule, NavigationComponent],
  templateUrl: './not-found-component.component.html',
  styleUrl: './not-found-component.component.css'
})
export class NotFoundComponentComponent {

}
