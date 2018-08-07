import { Component, OnInit } from '@angular/core';
import {PersistenceService} from '../service/persistence.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit() {
  }
}
