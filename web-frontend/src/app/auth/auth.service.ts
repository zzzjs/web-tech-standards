import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserAccountModel} from './user.account.model';
import {Service_HostName} from '../shared/constants';
import {LocalStorageService} from '../shared/local.storage.service';

@Injectable()
export class AuthService {
  token: string;
  userAccount: UserAccountModel;
  admin = false;

  constructor(private router: Router,
              private httpClient: HttpClient,
              private localStorageService: LocalStorageService) {}

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
    this.localStorageService.removeToken();
    this.localStorageService.removeUser();
    this.localStorageService.removeAdmin();
    this.localStorageService.removeIsAdmin();
    // this.localStorageService.removeRecipes();
  }

  setToken(token: string) {
    if (token == null) { return; }
    this.token = token;
    this.localStorageService.storeToken(this.token);
  }

  isAuthenticated() {
    return this.token != null;
  }

  setAdmin(admin: boolean) {
    if (admin == null) { return; }
    this.admin = admin;
    this.localStorageService.storeIsAdmin(this.admin);
  }

  isAdmin() {
    return this.admin;
  }
}
