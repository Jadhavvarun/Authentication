import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(
        (data) => {
          this.todos = data;
          console.log(this.todos);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}