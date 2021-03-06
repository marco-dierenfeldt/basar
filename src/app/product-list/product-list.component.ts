import { Component, OnInit } from '@angular/core';
import {PersistenceService} from '../service/persistence.service';
import {Customer} from '../model/Customer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  customer:Customer;

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit() {
    this.persistenceService.getGustomer().subscribe(
      (customer) => {
        console.info('load customer succesfull');
        if (customer !== null) {
          this.customer = customer;
        }
      },
      (error) => {
        console.warn('loade customer failed. ' + error);
      });
  }
}
