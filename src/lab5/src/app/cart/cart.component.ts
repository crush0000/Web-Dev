import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { CartService } from '../cart.service';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [NgForOf, CurrencyPipe, ReactiveFormsModule, RouterLink],
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // @ts-ignore
  items = this.cartService.getItems();

  // @ts-ignore
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
