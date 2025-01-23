import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-user-login',
  imports: [FormsModule], 
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
    onSubmit(form: any)
    {
      console.log(form);
    }
    formValues = {
      userEmail:'',
      userPassword:''
    }

}
