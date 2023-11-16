import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route, RouterModule, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import ApiService from './_services/api.service';

const routes: Route[] =  [
//  {path: 'crisis-list', component: CrisisListComponent},
  // {path: 'home', redirectTo: '/home/A'},
  {
    path: 'home/:lettera',
    component: HomeComponent,
    resolve: {
      'searchResponse': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                  inject(ApiService).searchByF(route.paramMap.get('lettera')!)
    }
  },{
    path: 'dettaglio/:idDrink',
    component: DettaglioComponent,
    resolve: {
                'drink': (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
                            inject(ApiService).lookupByI(route.paramMap.get('idDrink')!)
        }
  },
  {path: '', pathMatch: 'full', redirectTo: '/home/A'},
//  {path: '**', redirectTo: '/home'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
