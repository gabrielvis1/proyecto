import { Component, inject, input } from '@angular/core';
import { ProductTableComponent } from "../../components/product-table/product-table.component";
import { ProductosService } from '@products/services/producto.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTableComponent,RouterLink],
  templateUrl: './products-admin-page.component.html',
})
export class ProductsAdminPageComponent {
  productosService = inject(ProductosService);

  productsResource = rxResource({
    request:()=>({}),
    loader: ({request}) => {
      return this.productosService.getProducts({});
    },
  });
}
