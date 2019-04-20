import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserAccountModel} from './user.account.model';

@Injectable()
export class AuthService {
  token: string;
  userAccount: UserAccountModel;

  constructor(private router: Router,
              private httpClient: HttpClient) {}

  signinUser(email: string, password: string) {
    this.userAccount = new UserAccountModel(0, email, password);
    return this.httpClient.post('http://localhost:8080/api/doctor/login', this.userAccount);
  }

  logout() {
    this.router.navigate(['/signin']);
    this.token = null;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
