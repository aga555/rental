import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html',
  styleUrls: ['./home-type-filter.component.css']
})
export class HomeTypeFilterComponent implements OnInit {
  @Input() defaultFilters = [];
  @Output() applied = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.defaultFilters);
    this.form = this.formBuilder.group({
      Apartment: [this.defaultFilters.includes('Apartment')],
      Flat: [this.defaultFilters.includes('Flat')],
      House: [this.defaultFilters.includes('House')]
    });
  }

  submit(formValue) {
    console.log(formValue);
    const homeTypes = Object.keys(formValue).filter(item => formValue[item]);
    this.applied.emit(homeTypes);
  }
}
