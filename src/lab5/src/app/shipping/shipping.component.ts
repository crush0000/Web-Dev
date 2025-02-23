import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  imports: [NgForOf, AsyncPipe, CurrencyPipe],
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
