import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ApiService from '../../_services/api.service';
import Drink from '../../_models/drink.model';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
})
export class ElencoComponent implements OnInit {
  drinks: Drink[] = [];
  drinkConsigliati: Drink[] = [];
  lettere = ['A','B','C','D','E'];
  numPagine = 0;
  paginaCorrente = 1;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.data.subscribe(
      ({searchResponse}) => {
        this.drinks = searchResponse;
        this.refresh();
      });
  }

  refresh() {
    this.drinkConsigliati = [this.drinks[0],this.drinks[1],this.drinks[2]];
    this.numPagine = Math.ceil(this.drinks.length / 10);
    if (this.paginaCorrente > this.numPagine) {
      this.paginaCorrente = 1;
    }
  }

  save() {
  }

  cancellaDrink(drink: Drink) {
    if(confirm('Vuoi cancellare il drink ' + drink.strDrink + '?')) {
      console.log('cancellazione vera', drink.strDrink);
      //this.apiService.deleteDrink(drink.idDrink).subscribe( () => {
        this.apiService.searchByF('A').subscribe( drinks => {
          this.drinks = drinks;
          this.refresh();
        })
      // })
    }
  }
}

