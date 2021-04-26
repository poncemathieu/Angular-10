import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import {  Cocktail } from '../common/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public cocktails: Cocktail[]= new Array<Cocktail>();


  constructor(public cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktails= this.cocktailService.getCocktails();
  }

}
