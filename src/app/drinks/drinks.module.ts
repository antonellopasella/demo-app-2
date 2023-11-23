import { NgModule } from "@angular/core";
import { DrinksRoutingModule } from "./drink-routing.module";
import { DettaglioComponent } from "./dettaglio/dettaglio.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DrinkCardComponent } from "./drink-card/drink-card.component";
import { ElencoComponent } from "./elenco/elenco.component";

@NgModule({
  declarations: [
    DettaglioComponent,
    ElencoComponent,
    DrinkCardComponent,
  ],
  imports: [
    DrinksRoutingModule,
    FormsModule,
    CommonModule,
  ],
})
export class DrinksModule { }
