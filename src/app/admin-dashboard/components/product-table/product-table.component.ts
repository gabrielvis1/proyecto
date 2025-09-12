import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '@products/interfaces/producto.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

@Component({
  selector: 'product-table',
  imports: [ProductImagePipe,RouterLink],
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent {
  products = input.required<Producto[]>();
 }
