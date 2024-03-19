import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  
  
export class AppComponent {
  title = 'my-app';
}
