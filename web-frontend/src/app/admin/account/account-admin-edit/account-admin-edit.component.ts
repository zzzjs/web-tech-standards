import { Component, OnInit } from '@angular/core';
import {User} from '../../../user/models/user.model';
import {NetConnectService} from '../../../shared/net.connect.service';
import {PrivateInfo} from '../../../user/models/privateInfo';
import {Birthday} from '../../../user/models/birthday.model';
import {Address} from '../../../user/models/address.model';
import {AdminService} from '../../../shared/services/admin.service';

@Component({
  selector: 'app-account-admin-edit',
  templateUrl: './account-admin-edit.component.html',
  styleUrls: ['./account-admin-edit.component.css']
})
export class AccountAdminEditComponent implements OnInit {
  user: User;
  gender: string;
  month: string;
  day: string;
  year: string;
  city: string;
  state: string;
  zip: string;
  constructor(private adminService: AdminService,
              private netService: NetConnectService) { }

  ngOnInit() {
    this.user = this.adminService.getAdmin();
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
