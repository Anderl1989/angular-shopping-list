import { Component, OnInit } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products: string[] = [
    'Milch',
    'Eier',
    'Mehl',
    'Butter',
    'Zucker',
  ];
  selected: number[] = JSON.parse(localStorage.getItem('selected') || '[]');
  onSelectionChange(event: MatSelectionListChange): void {
    this.selected = event.source.selectedOptions.selected.map((option: MatListOption) => option.value);
    localStorage.setItem('selected', JSON.stringify(this.selected));
  }

  onProductClick(event: string) {
    this.selected = [];
    localStorage.setItem('selected', JSON.stringify(this.selected));
    console.log(event);
  }
}
