import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {PersistenceService} from '../../service/persistence.service';

@Component({
  selector: 'app-header-data',
  templateUrl: './header-data.component.html'
})
export class HeaderDataComponent implements OnInit {

  customer: Customer;
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
