import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$ = this.productService.getProducts();

  isCollapsed = true;

  carts = this.productService.carts;

  constructor(private productService: ProductService) {}
}
