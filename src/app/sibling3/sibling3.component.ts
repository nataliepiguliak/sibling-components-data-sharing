import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sibling3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sibling3.component.html',
  styleUrl: './sibling3.component.scss',
})
export class Sibling3Component {
  // TODO: get items as an Observable

  constructor(private itemsService: ItemsService) {}

  clearItems() {
    // TODO: clear items from the shared service
  }
}
