import {Injectable} from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {Customer} from '../model/Customer';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor(protected localStorage: LocalStorage) {
  }

  persistCustomer(customer: Customer) {
    this.localStorage.setItem('customer', customer).subscribe(() => {
      console.log('customer persisted');
      },
      (error) => {
        console.warn('persist customer faild ' + error);
      });
  }

  getGustomer(): Observable<Customer> {
    return this.localStorage.getItem<Customer>('customer');
  }
}
