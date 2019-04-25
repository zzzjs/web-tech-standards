import { Component, OnInit } from '@angular/core';
import {User} from '../../user/models/user.model';
import {NetConnectService} from '../../shared/net.connect.service';
import {AdminService} from '../../shared/services/admin.service';

@Component({
  selector: 'app-account',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: User;
  constructor(private netService: NetConnectService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.admin = this.adminService.getAdmin();
    this.netService.getUsers();
  }

}
