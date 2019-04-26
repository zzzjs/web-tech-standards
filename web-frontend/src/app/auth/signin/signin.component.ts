import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../user/models/user.model';
import {UserService} from '../../user/user.service';
import {AdminService} from '../../shared/services/admin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  invalid = '';

  constructor(private authService: AuthService, private router: Router,
              private userService: UserService, private adminService: AdminService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
      this.authService.signinUser(username, password)
        .subscribe((user: User) => {
          console.log(user);
          if (user.isAdmin) {
            console.log(user);
            this.adminService.storeAdmin(user);
            this.router.navigate(['/admin']);
            this.authService.admin = true;
          } else {
            this.userService.storeUser(user);
            this.router.navigate(['/user']);
            this.authService.admin = false;
          }
          this.authService.token = '1024';
        }, error1 => {
          console.log(error1);
        });
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }
}
