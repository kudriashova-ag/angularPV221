import { Component } from '@angular/core';
import { users } from '../UsersData';
import { User } from '../User';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  usersList: User[] = users;
  isAddUserOpen: boolean = false;
  toggleIsAddUserOpen() {
    this.isAddUserOpen = !this.isAddUserOpen;
  }

  userName = '';
  userEmail = '';
  userPhones = '';

  addUser() { 
    this.usersList.push({
      id: new Date().getTime(),
      name: this.userName,
      email: this.userEmail,
      phones: [this.userPhones],
    });
  }
}
