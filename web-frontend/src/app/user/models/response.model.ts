import {User} from './user.model';

export class ResponseModel {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }
}
