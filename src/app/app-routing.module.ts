import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomesComponent} from './homes/homes.component';


const routes: Routes = [{
  path: 'homes',
  component: HomesComponent
},
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full'
  },
  { path: 'homes/:id', redirectTo: '/homes/:id' },

  { path: 'homes',  component: HomesComponent },
  { path: 'homes/:id', component: HomesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
