import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CartModule } from '../cart/cart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class CheckoutModule {}
