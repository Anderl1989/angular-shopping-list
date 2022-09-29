import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

type Product = {
  id: string,
  name: string;
  checked?: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  static STORAGE_KEY = 'products';
  products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  protected loadProducts() {
    const productsString: string | null = localStorage.getItem(ProductService.STORAGE_KEY);
    if (productsString) {
      this.products = JSON.parse(productsString);
    }
  }

  protected saveChanges() {
    const saveProducts = this.products.map(product => ({ id: product.id, name: product.name }));
    localStorage.setItem(ProductService.STORAGE_KEY, JSON.stringify(saveProducts));
  }

  addToCart(name: string) {
    this.products.push({ id: uuidv4(), name });
    this.saveChanges();
  }

  toggleChecked(id: string) {
    const product: Product | undefined = this.products.find(p => p.id === id);
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
