import { Component } from '@angular/core';
import { categories } from '../category.service';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  imports: [NgForOf, RouterLink],
  styleUrls: ['./view-categories.component.css'],
})
export class ViewCategoriesComponent {
  categories = categories;
}
