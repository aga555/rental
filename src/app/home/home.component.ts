import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DataService} from '../data.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Home} from '../home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeId;
  home$: Observable<Home>;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.home$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataService.getHome(params.get('id')))
    );
  }
  gotoHomes(home: Home) {
    const homeId = home ? home.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/homes', { id: home, foo: 'foo' }]);
  }


}
