import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Recipe} from './models/recipe.model';
import {Photo} from './models/photo.model';
import {SubmitRecipe} from './models/submit.recipe.model';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe(
    //   'Modern Tuna Melt Sandwich',
    //   '2019-04-12T20:17:18.718Z',
    //   'cantonese',
    //   new Photo('https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/tuna-web.jpg?itok=KYEw-HTd', 'image/jpeg', 'photo-1555208767093.jpg'),
    //   '20mins',
    //   '15mins',
    //   'The old school tuna melt just received it\'s P.H.D with this transformation.  Fresh tuna is seared, cubed and tossed in a creamy mayo and sour cream dressing with dill, chives, chopped radish, lemon juice and garlic powder.  Spoon it onto toasted 12 grain bread and top it will Sargento® Sliced Cheddar Cheese.  Fresh tomatoes, avocado slices and fresh ground black pepper put the finishing touches on this honor roll sandwich',
    //   ['1/2 cup mayonnaise', '1/2 cup sour cream', '1/4 cup red onion', '2 medium radishes, chopped'],
    //   ['In a medium bowl, combine mayonnaise and next 9 ingredients. Stir until well blended. Cover and refrigerate until ready to assemble sandwich.', 'Toast bread to golden brown. Divide arugula over each piece of toast. Divide refrigerated tuna mixture evenly over arugula. Top each sandwich with 1 slice of cheese. Place sandwiches on a baking sheet and broil for 1-2 minutes or until cheese is melted. Remove from oven and top with avocado slices, tomato slices and ground pepper.', 'Note: Tuna can be grilled to well done, then flaked with a fork like canned tuna.'],
    //   [],
    //   2,
    //   'Tim'),
    // new Recipe(
    //   'Prosciutto Baguette Slider Sandwiches',
    //   '2019-04-12T20:17:18.718Z',
    //   'Summer Sandwiches',
    //   new Photo('https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/Leaning_Tower_Cheesa_5Cheese_Italian.jpg?itok=ohsTVwYB', 'image/jpeg', 'photo-1555208767093.jpg'),
    //   '15min',
    //   '0min',
    //   'Lean in to Summer with these quick and easy baguette slider sandwiches. Prosciutto, cappicola, salami and lettuce are layered on baguette slices with a chopped olive and onion mixture. Stack them up like the leaning tower of Pisa. Your guests will think they’re in Italy.',
    //   ['1 cup chopped olives (black, green and Kalamata)', '1/4 cup red onion, chopped', '1 tbsp fresh basil, chopped', '1 tbsp extra virgin olive oil'],
    //   ['In a small bowl, combine olives and next 4 ingredients. Set aside', 'Place 8 baguette slices on a clean, flat surface. Spoon about 1-1/2 tablespoons chopped olive mixture, 1 piece of leaf lettuce, 1 slice of Prosciutto, 1 slice of Capicola, 1 slice of Salami and 1 slice of Sargento® Blends 5 Cheese Italian on each bread slice. Top with remaining bread slices.', 'Stack sandwiches to form a tower. Enjoy'],
    //   [],
    //   3,
    //   'Tim',
    // )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: string) {
    let temp: Recipe;
    this.recipes.forEach((recipe) => {
      if (recipe.id === index) { temp = recipe; }
    });
    return temp;
  }

  storeRecipes(recipes: Recipe[]) {
    this.recipes = [];
    this.recipes = recipes;
    const jsonData = JSON.parse(JSON.stringify(recipes));
    // const id = jsonData[0]._id;
    // console.log(jsonData);
    // console.log(id);
    for (let i = 0; i < recipes.length; i++) {
      this.recipes[i].id = jsonData[i]._id;
    }
    // console.log(this.recipes[0].id);
  }

  addRecipe(value: SubmitRecipe) {

  }
}
