import { Component, OnInit } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  addItem = '';

  constructor(private cartService: CartService) { }

  getProducts() {
    return this.cartService.getProducts();
  }

  addToCart() {
    this.cartService.addToCart(this.addItem);
    this.addItem = '';
  }

  removeSelected() {
    this.cartService.removeSelected();
  }

  onSelectionChange(event: MatSelectionListChange): void {
    this.cartService.toggleChecked(event.options[0].value);
  }


}
