import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ApiService from '../../_services/api.service';
import Drink from 'src/app/_models/drink.model';

@Component({
  selector: 'drink-card',
  templateUrl: './drink-card.component.html',
})
export class DrinkCardComponent {
  @Input() drink!:Drink;
  @Output() onDelete: EventEmitter<Drink> = new EventEmitter();
  @Output() pippo: EventEmitter<'OPEN' | 'CLOSED'> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  eliminaDrink() {
    this.onDelete.next(this.drink);
  }
}
