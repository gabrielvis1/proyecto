import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductosResponse, Producto, } from '@products/interfaces/producto.interface';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  genero?: string;
  page?: number;
}

@Injectable({ providedIn: 'root' })

export class ProductosService {
  private http = inject(HttpClient);

  private productsCache = new Map<string, Observable<ProductosResponse>>();

  getProducts(options: Options): Observable<ProductosResponse> {
    const { limit = 15, page = 1, offset = 0, genero = '' } = options;
    const cacheKey = JSON.stringify({ limit, offset, genero, page });

    if (this.productsCache.has(cacheKey)) {
      return this.productsCache.get(cacheKey)!;
    }

    const request$ = this.http.get<ProductosResponse>(`${baseUrl}/productos`, {
      params: { limit, offset, genero, page },
    }).pipe(
      shareReplay(1)
    );

    this.productsCache.set(cacheKey, request$);
    console.log(request$)
    return request$;
  }

  private productoCache = new Map<string, Observable<Producto>>();

  getProductoById(id: string): Observable<Producto> {
    if (this.productoCache.has(id)) {
      return this.productoCache.get(id)!;
    }

    const request$ = this.http.get<Producto>(`${baseUrl}/productos/${id}`).pipe(
      shareReplay(1)
    );

    this.productoCache.set(id, request$);
    return request$;
  }


}
