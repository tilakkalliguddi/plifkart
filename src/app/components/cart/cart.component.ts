import { Component, inject, Signal, computed } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { HeaderComponent } from '../header/header.component';
import { Product } from '../../interface';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationdialogComponent } from '../confirmationdialog/confirmationdialog.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private cartService = inject(CartService);
  private dialog = inject(MatDialog);
  private router = inject(Router);

  cartItems: Signal<Product[]> = this.cartService.getCartSignal();

  totalCartValue: Signal<number> = computed(() =>
    this.cartItems().reduce(
      (total, item) => total + (item.discountPrice || 0) * item.quantity,
      0
    )
  );

  increaseQuantity(product: Product): void {
    this.cartService.increaseQuantity(product.id);
  }

  decreaseQuantity(product: Product): void {
    this.cartService.decreaseQuantity(product.id);
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product.id);
  }

  placeOrder(): void {
    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      data: {
        message: 'Are you sure you want to place this order?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        const currentCart = this.cartItems();

        const newOrder = {
          id: uuidv4(),
          items: currentCart,
          date: new Date().toISOString(),
        };
        const orders = JSON.parse(localStorage.getItem('orders') || '[]')
        orders.push(newOrder)
        localStorage.setItem('orders', JSON.stringify(orders))
        this.cartService.clearCart();
        this.cartService.show('Order placed successfully!', 'Close');
        this.router.navigate(['/orders']);
      }
    })
  }
}