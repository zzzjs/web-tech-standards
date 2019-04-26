import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-account-my-profile',
  templateUrl: './account-my-profile.component.html',
  styleUrls: ['./account-my-profile.component.css']
})
export class AccountMyProfileComponent implements OnInit {
  user: User;
  gender: string;
  month: string;
  day: string;
  year: string;
  city: string;
  state: string;
  zip: string;
  subscription: Subscription;
  birthday: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.userChanged
      .subscribe(() => {
        this.user = this.userService.getUser();
        this.initForm();
      });
    this.user = this.userService.getUser();
    this.initForm();
  }

  private initForm() {
    this.gender = this.user.PrivateInfo.gender;
    this.month = this.user.PrivateInfo.birthday.month;
    this.year = this.user.PrivateInfo.birthday.year;
    this.day = this.user.PrivateInfo.birthday.day;
    this.city = this.user.PrivateInfo.address.city;
    this.state = this.user.PrivateInfo.address.state;
    this.zip = this.user.PrivateInfo.address.zip;
    this.birthday = this.month + ' / ' + this.day + ' / ' + this.year;
  }


}
