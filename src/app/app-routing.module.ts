import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomesComponent} from './homes/homes.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: 'homes',
    component: HomesComponent
  },
  {
    path: '',
    redirectTo: 'homes',
    pathMatch: 'full'
  },
  {
    path: 'homes/:id',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
