import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../interface';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  private cartService = inject(CartService);
  private router = inject(Router);

  @Input() products: Product[] = []; // Input for products
  @Input() categoryHeading: string = ''; // Input for category heading
  @Input() categoryImage: string = ''; // Input for category image

  ngOnInit(): void {} 

  isProductInCart(productId: string): boolean {
    return this.cartService.getCartSignal()().some((product) => product.id === productId);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  RouteToCart(): void {
    this.router.navigate(['/cart']);
  }
}
