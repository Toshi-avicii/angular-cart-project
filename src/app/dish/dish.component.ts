import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Dish } from './dish.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css'
})
export class DishComponent {
  @Input({ required: true }) dish!: Dish;

  private cartService = inject(CartService);
  
  addToCart() {
    this.cartService.addToCart(this.dish);
  }

  removeFromCart() {
    this.cartService.removeItemFromCart(this.dish);
  }
  get filteredCartItems() {
    let filterCartItems = this.cartService.cartItems.filter(item => item.name === this.dish.name);
    return filterCartItems;
  }
}