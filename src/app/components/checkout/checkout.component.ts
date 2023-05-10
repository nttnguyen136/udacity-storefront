import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ICartItem } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  carts = this.productService.carts;
  isSuccesses = false;

  checkoutForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required]),
    securityCode: new FormControl('', [Validators.required]),
    expiredDate: new FormControl('', [Validators.required]),
    productList: new FormControl([...this.carts], [Validators.required]),
  });

  constructor(private productService: ProductService) {}
  ngOnInit(): void {}

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.productService.removeAll('THANK YOU FOR YOUR PURCHASE');
      this.isSuccesses = true;
    }
  }

  getTotalPrice() {
    return this.productService.getTotalPrice();
  }
  removeItem(i: number) {
    this.productService.removeFromCart(i);
  }
}
