import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './card/card.component';
import { ProductsService } from '../../shared/products/products.service';
import { Product } from '../../shared/products/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, AsyncPipe, NgFor, NgIf, MatProgressSpinnerModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  protected productsService = inject(ProductsService);

  constructor() {
    this.productsService.getProducts().subscribe({
      error: (error) => console.error('Error loading products:', error),
    });
  }

  onProductBuy(productId: Product['_id']): void {
    this.productsService.buyProduct(productId).subscribe({
      error: (error) => console.error('Error buying product:', error),
    });
  }
}
