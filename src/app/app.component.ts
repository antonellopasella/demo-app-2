import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  fattura = {
    id: 13,
    cliente: 'Mario Rossi srl',
    indirizzo: '',
    piva: '123123123123',
    importo: 123.43,
    pagata: true
  }

  pippo() {
    this.fattura.pagata = !this.fattura.pagata;
  }
}
