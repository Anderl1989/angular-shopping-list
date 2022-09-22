import { Component } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: string[] = [
    'Milch',
    'Eier',
    'Mehl',
    'Butter',
    'Zucker',
  ];
  onSelectionChange(event: MatSelectionListChange): void {
    console.log(event.source.selectedOptions.selected.map((option: MatListOption) => option.value));
  }
}
