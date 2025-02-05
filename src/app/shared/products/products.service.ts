import { Injectable, signal } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Product } from './product.interface';
import { productsMock } from './products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSignal = signal<Product[]>([]);

  getProducts(): Observable<Product[]> {
    return of(productsMock).pipe(
      delay(500),
      tap((products) => this.productsSignal.set(products)),
      catchError(() => throwError(() => new Error('Failed to load products'))),
    );
  }

  get products() {
    return this.productsSignal.asReadonly();
  }

  buyProduct(productId: Product['_id']): Observable<void> {
    console.log('buyProduct', productId);
    return of(void 0).pipe(
      delay(300),
      catchError(() => throwError(() => new Error('Failed to buy product'))),
    );
  }
}
