import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../user/user.service';
import {User} from '../../user/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  invalid = '';

  constructor(private authService: AuthService, private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const username = form.value.username;
    const password1 = form.value.password1;
    const password2 = form.value.password2;
    if (password1 !== password2) {
      this.invalid = 'The specified passwords do not match.';
      return;
    }
    this.authService.signupUser(username, password1)
      .subscribe((user: User) => {
        console.log(user);
        this.userService.storeUser(user);
        this.authService.token = '1024';
        this.invalid = '';
        this.router.navigate(['/user']);
      }, error1 => {
        console.log(error1);
      });

  }
}
