import {Injectable} from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {Customer} from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor(protected localStorage: LocalStorage) {
  }

  persistCustomer(customer: Customer) {
    this.localStorage.setItem('customer', customer).subscribe(() => {
      console.log('customer persisted');
    });
  }
}
