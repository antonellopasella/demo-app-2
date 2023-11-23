import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import ApiService from './_services/api.service';
import { DrinksModule } from './drinks/drinks.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    BlockUIHttpModule.forRoot(),
    AppRoutingModule,
    // DrinksModule, // feature module
                  // shared module (un modulo che importa/esporta tutti i moduli "comuni")
                  // core module (un modulo dove metto i service e che importa/esporta i moduli che metterei in app.module.ts)
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
