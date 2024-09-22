import { Component, inject, Input } from '@angular/core';
import { CartService } from './cart.service';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { ModalService } from '../order-modal/modal.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private cartService = inject(CartService);
  private modalService = inject(ModalService);
  cart = this.cartService.cartItems;

  get filterUniqueCartItems() {
    return this.cartService.cartItems.filter((item, index, self) => {
      return index === self.findIndex((t) => t.name === item.name);
    });
  }

  get itemsInTheCart() {
    return this.cartService.getCartItems();
  }

  get totalPrice() {
    return this.cartService.getCartTotal().toFixed(2);
  }

  setModalVisibility() {
    if(this.itemsInTheCart.length === 0) {
      alert("Cart is empty, please add some items to the cart first");
    } else {
      this.modalService.setModalVisibility();
    }
  }
}
