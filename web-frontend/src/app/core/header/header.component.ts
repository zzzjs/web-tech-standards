import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../user/user.service';
import {Subscription} from 'rxjs';
import {User} from '../../user/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  user = 'Tim';
  subscription: Subscription;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.userService.userChanged
      .subscribe((user: User) => {
        console.log(this.user);
        this.user = user.username;
      });
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAccount() {
    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }
  }
}
