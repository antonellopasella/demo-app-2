import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] =  [
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module')
                            .then(m => m.DrinksModule)
  },
  {path: '', pathMatch: 'full', redirectTo: '/drinks/elenco'},
//  {path: '**', redirectTo: '/home'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
