import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from '../../user/models/user.model';

@Injectable()
export class AdminService {
  adminChanged = new Subject<User>();
  usersChanged = new Subject<User[]>();
  private admin: User;
  private users: User[] = [];

  getAdmin() {
    return this.admin;
  }

  storeAdmin(admin: User) {
    this.admin = admin;
  }

  storeUsers(users: User[]) {
    this.users = users;
    const jsonData = JSON.parse(JSON.stringify(users));
    for (let i = 0; i < users.length; i++) {
      this.users[i].id = jsonData[i]._id;
    }
    for (let i = 0; i < users.length; i++) {
      if (this.users[i].isAdmin) {
        this.users.splice(i, 1);
        break;
      }
    }
    this.usersChanged.next(this.users.slice());
  }

  getUsers() {
    return this.users;
  }

  deleteRecipe(id: string) {
    this.users.forEach((user: User) => {
      for (let i = 0; i < user.PersonalRecipes.length; i++) {
        if (user.PersonalRecipes[i].recipeid === id) {
          user.PersonalRecipes.splice(i, 1);
          break;
        }
      }
    });
    this.usersChanged.next(this.users.slice());
  }
}
