import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: () => {
          this.router.navigateByUrl('/'); 
          console.log(this.email)
          window.alert("Login Successfull...");
        },
        error: (err) => {
          console.error('Login failed', err); 
          window.alert("Login Unsuccessfull...")
        }
      });
    }
  }
}
