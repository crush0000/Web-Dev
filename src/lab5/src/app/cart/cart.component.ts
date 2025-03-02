import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [RouterLink, CurrencyPipe, ReactiveFormsModule],
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  items = this.cartService.getItems();


  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    public cartService: CartService,
    public formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
