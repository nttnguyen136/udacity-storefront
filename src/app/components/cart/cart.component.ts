import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  isCollapsed = true;

  carts = this.productService.carts;

  isHidden$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),

    map((e) => e.url === '/checkout'),
    tap((isHidden) => {
      if (isHidden) {
        this.isCollapsed = true;
      }
    })
  );

  constructor(private productService: ProductService, private router: Router) {}

  removeItem(index: number) {
    this.productService.removeFromCart(index);
  }

  getTotalItem() {
    return this.carts.reduce((pre, cur) => {
      return cur.quality + pre;
    }, 0);
  }
  getTotalPrice() {
    return this.productService.getTotalPrice();
  }

  removeAll() {
    this.productService.removeAll();
  }
}
