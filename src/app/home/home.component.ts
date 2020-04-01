import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Home} from '../home';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DataService} from '../data.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() home: Home;

  ngOnInit() {
  }
}
