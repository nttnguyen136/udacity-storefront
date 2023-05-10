import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [CartComponent, CartItemComponent],
})
export class CartModule {}
