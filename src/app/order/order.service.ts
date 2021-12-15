import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import { Order } from "./order.model";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

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

    itemsValue(): number {
        return this.cartService.total();
    }

    clear() {
        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id);

    }


}