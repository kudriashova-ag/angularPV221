import { Injectable } from '@angular/core';
import { User } from '../components/users/User';
import { users } from '../components/users/UsersData';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersList: User[] = users;

  constructor(private log: LogService) {}

  getUsers(): User[] {
    return this.usersList;
  }

  addUser(data: any): void {
    this.log.write('User add!')
    this.usersList.push({
      id: new Date().getTime(),
      name: data.userName,
      email: data.userEmail,
      phones: [data.userPhones],
    });
  }
}
