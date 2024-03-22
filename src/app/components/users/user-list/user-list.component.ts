import { Component } from '@angular/core';
import { users } from '../UsersData';
import { User } from '../User';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserSingleComponent } from '../user-single/user-single.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, UserSingleComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
  
export class UserListComponent {
  usersList: User[] = [];

  constructor(private userService: UserService) { 
  }

  ngOnInit() { 
    this.usersList = this.userService.getUsers()
  }

  isAddUserOpen: boolean = false;
  toggleIsAddUserOpen() {
    this.isAddUserOpen = !this.isAddUserOpen;
  }

  userName = '';
  userEmail = '';
  userPhones = '';

  addUser() { 
    this.userService.addUser({
      userName: this.userName,
      userEmail: this.userEmail,
      userPhones: this.userPhones,
    });
  }
}
