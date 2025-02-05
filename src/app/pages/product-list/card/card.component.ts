import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly product = input.required<Product>();
  readonly buy = output<Product['_id']>();

  onProductBuy(event: Event): void {
    event.stopPropagation();
    this.buy.emit(this.product()._id);
  }

  isStarActive = (starIndex: number): boolean => {
    return this.product().rating >= starIndex;
  };
}
