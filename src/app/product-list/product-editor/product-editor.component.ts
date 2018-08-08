import {Component, OnInit} from '@angular/core';
import {Configservice, DefaultCategories} from '../../service/config.service';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html'
})
export class ProductEditorComponent implements OnInit {

  categories: any;

  constructor(private config: Configservice) {
    this.categories = config.getCategories();
  }

  getValue(category) {
    return DefaultCategories[category];
  }

  ngOnInit() {
  }

}
