import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ApiService from '../_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: any = [];
  lettere = ['A','B','C','D','E'];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.data.subscribe(
      ({searchResponse}) => {
        this.drinks = searchResponse.drinks;
      });
  }

  save() {
    // this.apiService.saveDrink(this.drinks);
  }
}

