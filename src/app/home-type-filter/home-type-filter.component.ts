import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html',
  styleUrls: ['./home-type-filter.component.css']
})
export class HomeTypeFilterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Apartment: [],
      Flat: [],
      House: []
    });
  }

  submit(formValue) {
    console.log(formValue);
  }
}
