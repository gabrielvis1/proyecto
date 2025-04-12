import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductosService } from '@products/services/producto.service';

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  productosService = inject(ProductosService);

  productsResource = rxResource({
    request:()=>({}),
    loader: ({request}) => {
      return this.productosService.getProducts({});
    },
  });
}
