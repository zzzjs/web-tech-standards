import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../user/models/user.model';
import {Subscription} from 'rxjs';
import {AdminService} from '../../../shared/services/admin.service';

@Component({
  selector: 'app-account-all-users',
  templateUrl: './account-all-users.component.html',
  styleUrls: ['./account-all-users.component.css']
})
export class AccountAllUsersComponent implements OnInit, OnDestroy {
  users: User[];
  subscription: Subscription;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.users = this.adminService.getUsers();
    this.subscription = this.adminService.usersChanged
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  ngOnDestroy(): void {

  }

}
