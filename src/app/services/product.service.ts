// product.service.ts
import { Injectable, signal } from '@angular/core';
import { Category, Product } from '../interface';
import { allProducts, categoryData } from '../../../public/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productStorageKey = 'storedProducts';
  private categoryStorageKey = 'categoryData';

  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);

  constructor() {
    this.initializeProducts();
  }
  initializeProducts(): void {
    if (!localStorage.getItem(this.productStorageKey)) {
      localStorage.setItem(this.productStorageKey, JSON.stringify(allProducts));
    }
    if (!localStorage.getItem(this.categoryStorageKey)) {
      localStorage.setItem(this.categoryStorageKey, JSON.stringify(categoryData));
    }

    this.categories.set(this.getStoredCategories());
    this.products.set(this.getStoredProducts());
  }

  getStoredProducts(): Product[] {
    return JSON.parse(localStorage.getItem(this.productStorageKey) || '[]');
  }

  getStoredCategories(): Category[] {
    return JSON.parse(localStorage.getItem(this.categoryStorageKey) || '[]');
  }

  getProductsByCategory(category: string): Product[] {
    return this.products().filter((product) => product.category === category);
  }

}
