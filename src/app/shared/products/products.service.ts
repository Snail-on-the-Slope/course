import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Product } from './product.interface';
import { productsMock } from './products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Observable<Product[]> {
    return of(productsMock).pipe(
      delay(500),
      catchError(() => throwError(() => new Error('Failed to load products'))),
    );
  }

  buyProduct(productId: string): Observable<void> {
    return of(void 0).pipe(
      delay(300),
      catchError(() => throwError(() => new Error('Failed to buy product'))),
    );
  }
}
