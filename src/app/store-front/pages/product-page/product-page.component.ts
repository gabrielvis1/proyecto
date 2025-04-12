import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '@products/services/producto.service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activatedRouter = inject(ActivatedRoute);
  ProductosService = inject(ProductosService);
  productId=this.activatedRouter.snapshot.params['Id'];

  productResource = rxResource({
    request:()=>({id:this.productId}),
    loader:({request})=> this.ProductosService.getProductoById(request.id),
  });
}
