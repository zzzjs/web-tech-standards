import { Component, OnInit } from '@angular/core';
import {NetConnectService} from '../../shared/net.connect.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private netConnectService: NetConnectService,
              private router: Router) { }

  ngOnInit() {
    this.netConnectService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['/submit-a-recipe']);
  }
}
