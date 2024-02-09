import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sibling2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.scss',
})
export class Sibling2Component {
  // TODO: get items as an Observable
  constructor(private itemsService: ItemsService) {}
}
