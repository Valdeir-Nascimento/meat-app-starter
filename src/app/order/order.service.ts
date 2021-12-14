import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) { }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increasyQty(item: CartItem) {
        this.cartService.increasyQty(item);
    }

    decreasyQty(item: CartItem) {
        this.cartService.decreasyQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }


}