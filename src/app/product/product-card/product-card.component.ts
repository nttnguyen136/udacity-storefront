import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: IProduct | undefined;

  quality = 1;

  constructor(private productService: ProductService) {}

  addToCard(product: IProduct) {
    this.productService.addToCart({
      quality: this.quality,
      product: product,
    });
  }
}
