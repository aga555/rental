import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {
  homeTypeDropdownOpen = false;
  homes$ = this.dataService.homes$;

  constructor(
    private dataService: DataService,
    private router: Router) {
  }

  ngOnInit() {
    this.dataService.loadHomes();
  }

  homeTypeFilterAplied($event) {
    this.homeTypeDropdownOpen = false;
    this.router.navigate(['homes'], {
      queryParams: {
        'home-type': $event
      }
    });
  }
}
