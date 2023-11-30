import { NgModule, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Route, RouterModule, RouterStateSnapshot } from "@angular/router";
import ApiService from "../_services/api.service";
import { DettaglioComponent } from "./dettaglio/dettaglio.component";
import { ElencoComponent } from "./elenco/elenco.component";

const routes: Route[] =  [
  {
    path: 'dettaglio/:idDrink',
    component: DettaglioComponent,
    resolve: {
                'drink': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                            inject(ApiService).lookupByI(route.paramMap.get('idDrink')!)
        }
  },
  {
    path: 'elenco',
    component: ElencoComponent,
    resolve: {
      'searchResponse': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                  inject(ApiService).searchByF('A')
}
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class DrinksRoutingModule { }
