import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './card/card.component';
import { ProductsService } from '../../shared/products/products.service';
import { Product } from '../../shared/products/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, AsyncPipe, NgFor, NgIf, MatProgressSpinnerModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.getProducts();
  }

  onProductBuy(product: Product): void {
    this.productsService.buyProduct(product.id).subscribe({
      error: (error) => console.error('Error buying product:', error),
    });
  }
}
