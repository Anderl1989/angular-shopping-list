import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ProductService {
  static override STORAGE_KEY = 'cartProducts';

  constructor() {
    super();
  }

  protected override loadProducts() {
    const productsString: string | null = localStorage.getItem(CartService.STORAGE_KEY);
    if (productsString) {
      this.products = JSON.parse(productsString);
    }
  }

  protected override saveChanges() {
    localStorage.setItem(CartService.STORAGE_KEY, JSON.stringify(this.products));
  }
}
