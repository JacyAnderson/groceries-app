import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Green Chile', 'Delicous, New Mexican Green Chile', 'https://eatyourworld.com/images/staff_food_entries/green-chili.jpg'),
    new Recipe('Breakfast Casserole', 'A delicious breakfast casserole', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/8/2/PB1305H_breakfast-casserole-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371616662935.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
