import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() selectedProducts: number[] = [];
  @Output() notify = new EventEmitter<string>();

  onClick() {
    this.notify.emit("Hallo Welt");
  }
}
