import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule] // Add FormsModule here for standalone components
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.signup(this.email, this.username, this.password)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/login');
          window.alert("User Created Sccessfull");
        },
        error: (err) => {
          console.error('Signup failed', err);
          window.alert(err);
        }
      });
  }
}
