import { Component, inject, Input } from '@angular/core';
import { Dish } from '../dish/dish.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input({ required: true }) cartItem!: Dish;
  @Input({ required: true }) viewInModal!: boolean;
  private cartService = inject(CartService);

  get filteredCartItems() {
    return this.cartService.cartItems.find(item => item.name === this.cartItem.name);
  }


  get itemCount() {
    return this.cartService.uniqueCartItemCount(this.cartItem);
  }

  get cartItemPrice() {
    if(this.filteredCartItems) {
      return this.itemCount * this.filteredCartItems?.price;
    } else {
      return 0;
    }
  }

  removeEntireEntryFromCart() {
    this.cartService.removeEntryFromCart(this.cartItem);
  }
}
