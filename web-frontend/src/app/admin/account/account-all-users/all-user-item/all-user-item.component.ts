import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../user/models/user.model';
import {NetConnectService} from '../../../../shared/net.connect.service';

@Component({
  selector: 'app-all-user-item',
  templateUrl: './all-user-item.component.html',
  styleUrls: ['./all-user-item.component.css']
})
export class AllUserItemComponent implements OnInit {

  @Input() user: User;

  constructor(private netService: NetConnectService) { }

  ngOnInit() {
  }

  onDelete() {
    console.log(this.user.id);
  }
}
