import { Component, OnInit } from '@angular/core';
import {User} from '../../../user/models/user.model';
import {Subscription} from 'rxjs';
import {AdminService} from '../../../shared/services/admin.service';

@Component({
  selector: 'app-account-admin-profile',
  templateUrl: './account-admin-profile.component.html',
  styleUrls: ['./account-admin-profile.component.css']
})
export class AccountAdminProfileComponent implements OnInit {
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
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.subscription = this.adminService.adminChanged
      .subscribe(() => {
        this.user = this.adminService.getAdmin();
        this.initForm();
      });
    this.user = this.adminService.getAdmin();
    this.initForm();
  }

  private initForm() {
    console.log('init');
    console.log(this.user);
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
