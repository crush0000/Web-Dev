import { Component } from '@angular/core';
import { Product, products } from '../products';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [FormsModule, NgForOf, RouterLink, NgIf],
})
export class ProductListComponent {
  products: Product[] = products;
  searchInput: string = '';

  get filteredProducts(): Product[] {
    const searchTerm = this.searchInput.toLowerCase();
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm),
    );
  }

  share(productName: string, productLink: string) {
    const shareMessage = `Check out this product: ${productName} - ${productLink}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
  }

  sharetg(productName: string, productLink: string) {
    const shareMessage = `Check out this product: ${productName} - ${productLink}`;
    const whatsappLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
  }

  nextImage(product: Product) {
    if (product.img.length > 1) {
      product.currentImageIndex =
        (product.currentImageIndex + 1) % product.img.length;
    }
  }

  prevImage(product: Product) {
    if (product.img.length > 1) {
      product.currentImageIndex =
        (product.currentImageIndex - 1 + product.img.length) %
        product.img.length;
    }
  }
}
