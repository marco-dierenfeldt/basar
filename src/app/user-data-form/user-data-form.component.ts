import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
})
export class UserDataFormComponent implements OnInit {

  customerForm = new FormGroup({
      basarNumber: new FormControl(''),
      name: new FormControl(''),
      strreet: new FormControl(''),
      houseNumber: new FormControl(''),
      postalCode: new FormControl(''),
      city: new FormControl(''),
      phonenumber: new FormControl(''),
      email: new FormControl('')
    }
  );

  constructor() {
  }

  ngOnInit() {
  }

}
