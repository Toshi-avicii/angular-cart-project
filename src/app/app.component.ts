import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DishComponent } from './dish/dish.component';
import { DUMMY_DISHES } from '../data';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { ModalService } from './order-modal/modal.service';
import { OrderModalComponent } from './order-modal/order-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, DishComponent, CartItemComponent, OrderModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-1';
  dummyDishes = DUMMY_DISHES;

  private modalService = inject(ModalService);

  get modalVisibility() {
    return this.modalService.isModalVisible;
  }
}
