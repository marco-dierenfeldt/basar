import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
})
export class UserDataFormComponent implements OnInit {

  customerForm = new FormGroup({
      basarNumber: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      strreet: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    }
  );

  constructor() {
  }

  ngOnInit() {
  }

}
