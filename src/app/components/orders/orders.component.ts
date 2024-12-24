import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatCardModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    this.orders = storedOrders.sort(
      (a:any, b:any)=> new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  calculateTotal(items: any[]): number {
    return items.reduce(
      (total, item) => total + (item.discountPrice || 0) * (item.quantity || 0),
      0
    );
  }
}
