import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  imports: [NgIf],
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
