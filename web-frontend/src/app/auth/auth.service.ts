import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserAccountModel} from './user.account.model';
import {Service_HostName} from '../shared/constants';

@Injectable()
export class AuthService {
  token: string;
  userAccount: UserAccountModel;
  admin = false;

  constructor(private router: Router,
              private httpClient: HttpClient) {}

  signinUser(username: string, password: string) {
    this.userAccount = new UserAccountModel(username, password);
    console.log(this.userAccount);
    return this.httpClient.post(Service_HostName + '/login', this.userAccount);
  }

  signupUser(username: string, password: string) {
    this.userAccount = new UserAccountModel(username, password);
    console.log(this.userAccount);
    return this.httpClient.post(Service_HostName + '/signup', this.userAccount);
  }

  logout() {
    this.router.navigate(['/signin']);
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
  }

  isAdmin() {
    return this.admin;
  }
}
