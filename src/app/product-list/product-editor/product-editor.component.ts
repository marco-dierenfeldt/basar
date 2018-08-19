import {Component, OnInit} from '@angular/core';
import {Configservice, DefaultCategories} from '../../service/config.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html'
})
export class ProductEditorComponent implements OnInit {

  categories: any;
  productForm: FormGroup;

  constructor(private config: Configservice) {
    this.categories = config.getCategories();
    this.productForm = new FormGroup({
      lfdNo: new FormControl('', Validators.required, Validators.min(1)),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  getValue(category) {
    return DefaultCategories[category];
  }

  ngOnInit() {
  }

}
