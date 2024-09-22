import { Injectable } from "@angular/core";
import { Dish } from "../dish/dish.model";

@Injectable({ providedIn: 'root' })
export class CartService {
    private cart: Dish[] = [];

    constructor() {
        const cartItems = localStorage.getItem("cart");
        if (cartItems) {
            this.cart = JSON.parse(cartItems);
        }
    }

    addToCart(cartItem: Dish) {
        this.cart.push(cartItem);
        this.saveCart();
    }

    private saveCart() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }

    uniqueCartItemCount(cartItem: Dish) {
        return this.cart.filter(item => item.name === cartItem.name).length;
    }

    removeItemFromCart(cartItem: Dish) {

        const indexToRemove = this.cart.findIndex((item) => {
            return item.name === cartItem.name;
        });

        this.cart = this.cart.filter((item, index, self) => {
            return index !== indexToRemove;
        });

        this.saveCart();
        this.getCartItems();

    }

    get cartItems() {
        return this.cart;
    }

    getCartItems() {
        return this.cart;
    }

    getCartTotal(): number {

        const totalPrice: number = this.cart.reduce((accumulator: number, item: Dish) => {
            return accumulator + item.price;
        }, 0);

        return totalPrice;
    }

    removeEntryFromCart(cartItem: Dish) {
        this.cart = this.cart.filter(item => item.name !== cartItem.name);
        this.saveCart();
        this.getCartItems();
    }

}