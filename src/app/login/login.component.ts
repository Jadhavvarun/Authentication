import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit(form: NgForm) {
    // Handle form submission logic here
    console.log('Name:', form.value.name);
    console.log('Email:', form.value.email);
    console.log('Password:', form.value.password);

    // Reset the form after submission
    form.resetForm();
  }
}
