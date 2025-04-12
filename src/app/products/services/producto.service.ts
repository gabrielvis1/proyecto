import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductosResponse, Producto, } from '@products/interfaces/producto.interface';
import { Observable, of, tap } from 'rxjs';
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

  getProducts(options: Options): Observable<ProductosResponse> {
    const { limit = 15, page = 1, offset = 0, genero = '' } = options;

    return this.http
      .get<ProductosResponse>(`${baseUrl}/productos`, {
        params: { limit, offset, genero, page },
      }).pipe(tap((resp) => console.log(resp)));
  }

  getProductoById(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${baseUrl}/productos/${id}`)
    .pipe(tap((resp) => console.log(resp)));
  }
}
