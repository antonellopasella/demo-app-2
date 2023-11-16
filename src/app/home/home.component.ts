import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ApiService from '../_services/api.service';
import Drink from '../_models/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];
  drinkConsigliati = [{num:1},{num:2},{num:3}];
  lettere = ['A','B','C','D','E'];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.data.subscribe(
      ({searchResponse}) => {
        this.drinks = searchResponse;
      });
  }

  save() {
    // this.apiService.saveDrink(this.drinks);
  }
}

