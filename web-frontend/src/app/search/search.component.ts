import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NetConnectService} from '../shared/net.connect.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private netService: NetConnectService) { }

  ngOnInit() {
  }

  onSearch(form: NgForm) {
    this.netService.searchRecipes(form.value.keywords);
  }
}
