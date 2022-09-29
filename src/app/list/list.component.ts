import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { map, Observable, startWith } from 'rxjs';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  addControl = new FormControl<string>('');
  filteredAddOptions: Observable<string[]> = new Observable<string[]>();
  addItem = '';

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
    this.filteredAddOptions = this.addControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(name: string | null): string[] {
    if (!name) return [];
    const filterValue = name.toLowerCase();

    return this.productService.getProducts()
      .map(p => p.name)
      .filter(productName => productName.toLowerCase().includes(filterValue));
  }

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
