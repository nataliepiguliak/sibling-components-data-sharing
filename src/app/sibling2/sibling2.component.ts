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
  items$ = this.itemsService.items$;
  constructor(private itemsService: ItemsService) {}
}
