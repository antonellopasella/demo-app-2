import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, of } from "rxjs";
import Drink from "../_models/drink.model";

@Injectable({
  providedIn: 'root'
})
export default class ApiService {
  baseUrl = 'http://www.thecocktaildb.com/api/json/v1/1';

  constructor( private http: HttpClient) {}

  lookupByI(idDrink: string) {
    if (localStorage['drink'+idDrink]) {
      return of(JSON.parse(localStorage['drink'+idDrink]) as Drink);
    }
    return this.http.get( this.baseUrl + '/lookup.php?i=' + idDrink)
                    .pipe(map((response:any) => {
                      const drink = this.normalizeDrink(response.drinks[0]);
                      localStorage['drink'+idDrink] = JSON.stringify(drink);
                      return drink;
                    }));
  }

  searchByF(letter: string) {
    return this.http.get( this.baseUrl + '/search.php?f=' + letter)
                    .pipe(map( (response: any) => {
                      const drinks: Drink[] = [];
                      response.drinks.forEach( (drink: any) => {
                        drinks.push(this.normalizeDrink(drink));
                      })
                      return drinks;
                    }));
  }

  normalizeDrink(drink: any) {
    drink.tags = drink.strTags?.split(',') || [];
    const ingredients = [];
    for (let i = 1; i <=15;i++) {
      if(drink['strIngredient' + i]) {
        ingredients.push({
          name: drink['strIngredient' + i],
          quantity: drink['strMeasure' + i]
        });
      }
      delete drink['strIngredient' + i];
      delete drink['strMeasure' + i]
    }
    const instructions = [];
    instructions.push({
      lang: 'EN',
      text: drink.strInstructions
    });
    delete drink.strInstructions;
    Object.keys(drink).forEach( prop => {
      if(prop.indexOf('strInstructions') !== -1) {
        if(drink[prop]) {
          instructions.push({
            lang: prop.replace('strInstructions', ''),
            text: drink[prop],
          });
        }
        delete drink[prop];
      }
    })

    delete drink['strTags']

    drink.ingredients = ingredients;
    drink.instructions = instructions;
    return drink as Drink;

  }

  saveDrink(drink: any) {
  }

}
