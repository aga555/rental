import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Home} from './home';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  homes$ = new BehaviorSubject({loading: true, data: []});

  constructor(private httpClient: HttpClient) {
  }

  loadHomes(homeTypeFilters, searchString) {
    this.homes$.next({loading: true, data: []});
    this.httpClient.get<any[]>('assets/homes.json')
      .pipe(delay(2000),
        map(homes => {
          if (homeTypeFilters.length === 0) {
            return homes;
          }
          return homes.filter(home => homeTypeFilters.includes(home.type));
        }),
        map(homes => {
          if (!searchString) {
            return homes;
          }
          return homes.filter(home => home.title.includes(searchString));
        }),
      )
      .subscribe(homes => {
        this.homes$.next({loading: false, data: homes});

      });
  }

  getHomes() {
    return this.httpClient.get<any[]>('assets/homes.json');
  }

  getHome(id: number | string) {
    return this.getHomes().pipe(
      // (+) before `id` turns the string into a number
      map((homes$: Home[]) => homes$.find(home => home.id === +id))
    );
  }

}
