import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [],
      []),
    new Recipe('Modern Tuna Melt Sandwich',
      'The old school tuna melt just received it\'s P.H.D with this transformation.  Fresh tuna is seared, cubed and tossed in a creamy mayo and sour cream dressing with dill, chives, chopped radish, lemon juice and garlic powder.  Spoon it onto toasted 12 grain bread and top it will Sargento® Sliced Cheddar Cheese.  Fresh tomatoes, avocado slices and fresh ground black pepper put the finishing touches on this honor roll sandwich',
      'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/tuna-web.jpg?itok=KYEw-HTd',
      ['1/2 cup mayonnaise', '1/2 cup sour cream', '1/4 cup red onion', '2 medium radishes, chopped', '2 Tbsp. fresh dill, chopped', '1 Tbsp. fresh chives, chopped', '1 Tbsp. lemon juice'],
      ['In a medium bowl, combine mayonnaise and next 9 ingredients. Stir until well blended. Cover and refrigerate until ready to assemble sandwich.', 'Toast bread to golden brown. Divide arugula over each piece of toast. Divide refrigerated tuna mixture evenly over arugula. Top each sandwich with 1 slice of cheese. Place sandwiches on a baking sheet and broil for 1-2 minutes or until cheese is melted. Remove from oven and top with avocado slices, tomato slices and ground pepper.', 'Note: Tuna can be grilled to well done, then flaked with a fork like canned tuna.']),
    new Recipe('Prosciutto Baguette Slider Sandwiches',
      'Lean in to Summer with these quick and easy baguette slider sandwiches. Prosciutto, cappicola, salami and lettuce are layered on baguette slices with a chopped olive and onion mixture. Stack them up like the leaning tower of Pisa. Your guests will think they’re in Italy.',
      'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/Leaning_Tower_Cheesa_5Cheese_Italian.jpg?itok=ohsTVwYB',
      ['1 cup chopped olives (black, green and Kalamata)', '1/4 cup red onion, chopped', '1 tbsp fresh basil, chopped', '1 tbsp extra virgin olive oil'],
      ['In a small bowl, combine olives and next 4 ingredients. Set aside', 'Place 8 baguette slices on a clean, flat surface. Spoon about 1-1/2 tablespoons chopped olive mixture, 1 piece of leaf lettuce, 1 slice of Prosciutto, 1 slice of Capicola, 1 slice of Salami and 1 slice of Sargento® Blends 5 Cheese Italian on each bread slice. Top with remaining bread slices.', 'Stack sandwiches to form a tower. Enjoy'])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
