import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../../recipes/models/recipe.model';
import {NetConnectService} from '../../../../shared/net.connect.service';
import {UserService} from '../../../../user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-reipe-item',
  templateUrl: './all-reipe-item.component.html',
  styleUrls: ['./all-reipe-item.component.css']
})
export class AllReipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;
  constructor(private netService: NetConnectService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onDeleteRecipe() {
    const recipe = {
      id: this.recipe.id,
      title: this.recipe.title,
      user: this.userService.getUser()
    };
    this.netService.deleteRecipe(recipe);
  }

  onEditRecipe() {
    this.router.navigate(['/admin/' + this.recipe.id + '/edit']);
  }

}
