import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-sibling1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.scss',
})
export class Sibling1Component {
  item: string = '';

  constructor(private itemsService: ItemsService) {}

  addItem() {
    // TODO: add item to the shared collection
    this.item = '';
  }
}
