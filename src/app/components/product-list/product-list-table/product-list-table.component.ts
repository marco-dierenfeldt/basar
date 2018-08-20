import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/basar-model';
import {PersistenceService} from '../../../service/persistence.service';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html'
})
export class ProductListTableComponent implements OnInit {
  private productList: Product[];

  constructor(private persistenceService: PersistenceService) {
    this.productList = [] as Product[];
  }

  ngOnInit() {
    this.persistenceService.getProductList().subscribe(
      (productList) => {
        console.info('load productList succesfull');
        if (productList !== null) {
          this.productList = productList;
        }
      },
      (error) => {
        console.warn('loade customer failed. ' + error);
      });
  }

}
