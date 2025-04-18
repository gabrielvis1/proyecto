import { Component, inject, Signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '@products/interfaces/producto.interface';
import { ProductosService } from '@products/services/producto.service';
import { ProductCaroselComponent } from "../../../products/components/product-carosel/product-carosel.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductCaroselComponent],
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
