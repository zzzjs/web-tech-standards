import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../user/models/user.model';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  invalid = '';

  constructor(private authService: AuthService, private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.signinUser(username, password)
      .subscribe((user: User) => {
        console.log(user);
        this.userService.storeUser(user);
        this.authService.token = '1024';
        this.router.navigate(['/user']);
      }, error1 => {
        console.log(error1);
      });
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }
}
