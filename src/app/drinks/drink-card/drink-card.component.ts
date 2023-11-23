import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ApiService from '../../_services/api.service';

@Component({
  selector: 'drink-card',
  templateUrl: './drink-card.component.html',
})
export class DrinkCardComponent {
  @Input() drink:any;
  constructor(private route: ActivatedRoute, private apiService: ApiService,
              private router: Router) {
                console.log('drink card costruttore')
              }

  ngOnInit(): void {
  }
}
