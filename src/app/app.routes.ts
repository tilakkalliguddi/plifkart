import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
    { 
        path: 'cart', component: CartComponent 
    },
    { 
        path: 'orders', component: OrdersComponent 
    }
];
