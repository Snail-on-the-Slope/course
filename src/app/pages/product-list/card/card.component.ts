import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../shared/products/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) product!: Product;
  @Output() buy = new EventEmitter<Product>();

  onProductBuy(event: Event): void {
    event.stopPropagation();
    this.buy.emit(this.product);
  }

  isStarActive(starIndex: number): boolean {
    return this.product.rating >= starIndex;
  }
}
