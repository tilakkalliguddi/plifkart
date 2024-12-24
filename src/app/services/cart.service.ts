import { Injectable, signal, computed, inject } from '@angular/core';
import { Product } from '../interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartKey = 'cartItems';
  private cartSignal = signal<Product[]>(this.getCart());
  private snackBar = inject(MatSnackBar);

  public totalCartValue = computed(() =>
    this.cartSignal().reduce(
      (total, item) => total + item.discountPrice * item.quantity,
      0
    )
  );

  addToCart(product: Product): void {
    const cart = this.cartSignal();
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    this.updateCart(updatedCart);
    this.show(`${product.title} has been added to your cart.`);
  }

  increaseQuantity(productId: string): void {
    const updatedCart = this.cartSignal().map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    this.updateCart(updatedCart);
  }

  decreaseQuantity(productId: string): void {
    const updatedCart = this.cartSignal()
      .map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    this.updateCart(updatedCart);
  }

  removeFromCart(productId: string): void {
    const updatedCart = this.cartSignal().filter((item) => item.id !== productId);
    this.updateCart(updatedCart);
  }

  clearCart(): void {
    this.cartSignal.set([])
    localStorage.removeItem(this.cartKey)
  }

  getCartSignal() {
    return this.cartSignal;
  }

  private updateCart(cart: Product[]): void {
    this.cartSignal.set(cart);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  public getCart(): Product[] {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  show(message: string, action: string = '', duration: number = 2000) {
    this.snackBar.open(message, action, {
      duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
}