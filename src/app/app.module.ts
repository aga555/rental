import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomesComponent} from './homes/homes.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HomeTypeFilterComponent } from './home-type-filter/home-type-filter.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HomeTypeFilterComponent,
    HomeSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
