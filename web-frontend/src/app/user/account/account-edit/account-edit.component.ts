import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../user.service';
import {NetConnectService} from '../../../shared/net.connect.service';
import {PrivateInfo} from '../../models/privateInfo';
import {Birthday} from '../../models/birthday.model';
import {Address} from '../../models/address.model';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  user: User;
  gender: string;
  month: string;
  day: string;
  year: string;
  city: string;
  state: string;
  zip: string;
  constructor(private userService: UserService,
              private netService: NetConnectService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.initForm();
  }

  onSubmit() {
    const account = {
      id: this.user.id,
      PrivateInfo: new PrivateInfo(
        this.gender,
        new Birthday(this.month, this.day, this.year),
        new Address(this.city, this.state, this.zip))
    };
    this.netService.updateAccount(account);
  }

  private initForm() {
    this.gender = this.user.PrivateInfo.gender;
    this.month = this.user.PrivateInfo.birthday.month;
    this.year = this.user.PrivateInfo.birthday.year;
    this.day = this.user.PrivateInfo.birthday.day;
    this.city = this.user.PrivateInfo.address.city;
    this.state = this.user.PrivateInfo.address.state;
    this.zip = this.user.PrivateInfo.address.zip;
  }
}
