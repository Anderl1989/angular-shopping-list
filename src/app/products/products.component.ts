import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  addItem = '';

  constructor(private productService: ProductService) { }

  getProducts() {
    return this.productService.getProducts();
  }

  addToCart() {
    this.productService.addToCart(this.addItem);
    this.addItem = '';
  }

  removeSelected() {
    this.productService.removeSelected();
  }

  onSelectionChange(event: MatSelectionListChange): void {
    this.productService.toggleChecked(event.options[0].value);
  }
}
