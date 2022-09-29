import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

type CartProduct = {
  id: string,
  name: string;
  checked?: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: CartProduct[] = [
    // { id: uuidv4(), name: 'Milch' },
    // { id: uuidv4(), name: 'Eier' },
    // { id: uuidv4(), name: 'Mehl' },
    // { id: uuidv4(), name: 'Butter' },
    // { id: uuidv4(), name: 'Zucker' },
  ];

  constructor() {
    const productsString: string | null  = localStorage.getItem('cartProducts');
    if (productsString) {
      this.products = JSON.parse(productsString);
    }
  }

  private saveChanges() {
    localStorage.setItem('cartProducts', JSON.stringify(this.products));
  }

  addToCart(name: string) {
    this.products.push({ id: uuidv4(), name });
    this.saveChanges();
  }

  toggleChecked(id: string) {
    const product: CartProduct | undefined = this.products.find(p => p.id === id);
    if (product) {
      product.checked = !product.checked;
      this.saveChanges();
    }
  }

  removeSelected() {
    this.products = this.products.filter(p => !p.checked);
    this.saveChanges();
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    this.saveChanges();
    return this.products;
  }
}
