import { Component, OnInit } from '@angular/core';
import {NetConnectService} from '../../shared/net.connect.service';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private netConnectService: NetConnectService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.netConnectService.getRecipes();
  }


  onNewRecipe() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/submit-a-recipe']);
    } else {
      this.router.navigate(['/signin']);
    }
  }
}
