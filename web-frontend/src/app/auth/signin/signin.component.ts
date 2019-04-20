import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  invalid = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.router.navigate(['/']);
    this.authService.token = '1024';
    // this.authService.signinUser(email, password)
    //   .subscribe((data) => {
    //     console.log(data);
    //   }, error1 => {
    //     console.log(error1);
    //   });
  }
}
