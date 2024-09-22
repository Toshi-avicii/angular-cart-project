import { Component, inject } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { ModalService } from './modal.service';

@Component({
  selector: 'app-order-modal',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './order-modal.component.html',
  styleUrl: './order-modal.component.css'
})
export class OrderModalComponent {
  private cartService = inject(CartService);
  private modalService = inject(ModalService);

  cart = this.cartService.cartItems;

  get filterUniqueCartItems() {
    return this.cartService.cartItems.filter((item, index, self) => {
      return index === self.findIndex((t) => t.name === item.name);
    });
  }

  get totalPrice() {
    return this.cartService.getCartTotal().toFixed(2);
  } 

  setModalVisibility() {
    this.modalService.setModalVisibility();  
  }
}
