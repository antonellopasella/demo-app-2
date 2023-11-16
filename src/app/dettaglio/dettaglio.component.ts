import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Drink from '../_models/drink.model';
import ApiService from '../_services/api.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
})
export class DettaglioComponent {
  drink!: Drink;
  drinkTitle = '';
  newTag = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService,
              private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      ({drink}) => {
        this.drink = drink;
        this.drinkTitle = drink.strDrink;

      });
  }

  eliminaTag(index: number) {
    this.drink.tags.splice(index, 1);
  }
  inserisciTag() {
    this.drink.tags.push(this.newTag);
    this.newTag = '';
  }

  salva() {
    const drink = JSON.parse(JSON.stringify(this.drink));
    this.apiService.saveDrink(drink)
          .subscribe( response => {
            this.router.navigateByUrl('/home/A');
            // this.apiService.lookupByI(this.drink.idDrink).subscribe( drink => {
            //   this.drink = drink;
            //   this.drinkTitle = drink.strDrink;
            // })
          })

  }
}
