import { Injectable } from '@angular/core';
import { Cocktail } from './common/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  listCocktails: Cocktail[]= new Array<Cocktail>();

  constructor() { 
    this.listCocktails.push(
      new Cocktail(
        'Blue Lagoon',
        10.99,
        'https://cdn.laredoute.com/products/680by680/e/d/7/ed7e9effb87ab5f69d562d1a0998bd58.jpg'
      ),
      new Cocktail(
        'Cosmopolitain',
        11.9,
        'https://www.undejeunerdesoleil.com/wp-content/uploads/2020/05/Cosmopolitan_cocktail_recette.jpg'
      ),
      new Cocktail(
        'Cocktail dark and stormy',
        10.9,
        'https://www.ilovecakes.fr/wp-content/uploads/2020/07/cocktail-dark-stormy.jpg'
      )
    );
  }

  public getCocktails(): Cocktail[]{
    return this.listCocktails;
  }
}
