import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  isCollapsed = true;

  carts = this.productService.carts;

  constructor(private productService: ProductService) {}

  removeItem(index: number) {
    this.productService.removeFromCart(index);
  }

  getTotalPrice() {
    return this.carts.reduce((pre, cur) => {
      let total = cur.quality * cur.product.price;
      return total + pre;
    }, 0);
  }

  getTotalItem() {
    return this.carts.reduce((pre, cur) => {
      return cur.quality + pre;
    }, 0);
  }

  removeAll() {
    this.productService.removeAll();
  }
}
