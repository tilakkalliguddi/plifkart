import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product, Category } from '../../interface';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NavbarComponent, CarouselComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.initializeProducts();
    this.categories = this.productService.getStoredCategories();
  }

  getProductsForCategory(category: string): Product[] {
    return this.productService.getProductsByCategory(category);
  }
}
