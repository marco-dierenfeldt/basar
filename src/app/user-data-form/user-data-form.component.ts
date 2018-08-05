import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersistenceService} from '../service/persistence.service';
import {Customer} from '../model/Customer';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
})
export class UserDataFormComponent implements OnInit {
  private customerForm: FormGroup;
  private customer: Customer;


  constructor(private persistenceService: PersistenceService) {
    this.customerForm = new FormGroup({
      basarNumber: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dataSecurityConfirmation: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.persistenceService.getGustomer().subscribe(
      (customer) => {
        console.info('load customer succesfull');
        if (customer !== null) {
          this.customerForm.setValue(customer);
        }
      },
      (error) => {
        console.warn('loade customer failed. ' + error);
      });
  }

  private submitCustomerData() {
    this.customer = this.customerForm.value as Customer;
    this.persistenceService.persistCustomer(this.customer);
  }
}
