import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item!: ICartItem;
  @Output() removeItem = new EventEmitter();
}
