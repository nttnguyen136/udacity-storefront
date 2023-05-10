import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { ICartItem, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  carts: ICartItem[] = [];

  SSKEY = 'CART';

  constructor(private http: HttpClient, private toast: ToastrService) {
    const _cart = window.sessionStorage.getItem(this.SSKEY);

    if (_cart) {
      this.carts = JSON.parse(_cart);
    }
  }

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get('./assets/mocks/products.json')
      .pipe(map((res) => (res as { products: IProduct[] })['products']));
  }

  getProductById(id: number) {
    return this.getProducts().pipe(
      map((res) => {
        return res.find((product) => product.id === id);
      })
    );
  }

  getTotalPrice() {
    return this.carts.reduce((pre, cur) => {
      let total = cur.quality * cur.product.price;
      return total + pre;
    }, 0);
  }

  syncSessionStorage() {
    window.sessionStorage.setItem(this.SSKEY, JSON.stringify(this.carts));
  }

  addToCart(cartItem: ICartItem) {
    const ind = this.carts.findIndex(
      (item) => item.product.id === cartItem.product.id
    );
    if (ind >= 0) {
      this.carts[ind].quality += cartItem.quality;
    } else {
      this.carts.push(cartItem);
    }
    this.syncSessionStorage();

    this.toast.success(
      `Added ${cartItem.quality} ${cartItem.product.name} to cart`
    );
  }

  removeFromCart(itemId: number) {
    this.carts.splice(itemId, 1);

    this.syncSessionStorage();
    this.toast.success('Remove success');
  }

  removeAll(message?: string) {
    this.carts.splice(0, this.carts.length);
    this.syncSessionStorage();
    this.toast.success(message || 'Remove all success');
  }
}
