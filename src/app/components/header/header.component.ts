import { Component, Signal, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatInputModule,MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router = inject(Router)
  private cartService = inject(CartService);

  cartCount: Signal<number> = computed(() => {
    const cartItems = this.cartService.getCartSignal();
    return cartItems().length
  });
  
  RouteToCart(){
    this.router.navigate(['/cart']);
  }

  navigateToHome(){
    this.router.navigate(['/']);
  }
  navigateToOrders(){
    this.router.navigate(['/orders']);
  }
}
