import { Component, input, computed } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '@products/interfaces/producto.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  producto = input.required<Producto>();

  imageUrl = computed(() => {
    return `${baseUrl}/productos/imagen/${
      this.producto().images[0]
    }`;
  });
}
