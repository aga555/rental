import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {
  homeTypeDropdownOpen = false;
  currentHomeTypeFilter = [];
  homes$ = this.dataService.homes$;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const homeTypesFilters = params['home-type'] || [];
      this.dataService.loadHomes(homeTypesFilters);
      this.currentHomeTypeFilter = homeTypesFilters;
    });
  }

  homeTypeFilterAplied($event) {
    this.homeTypeDropdownOpen = false;
    this.router.navigate(['homes'], {
      queryParams: {
        'home-type': $event
      }
    });
  }

  searchAplied($event) {

    this.router.navigate(['homes'], {
      queryParams: {
        search: $event
      }
    });
  }

}
