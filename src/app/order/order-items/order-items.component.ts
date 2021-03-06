import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[] = [];
  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreasyQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreasyQty(item: CartItem) {
    this.increaseQty.emit(item);
  }

  emitDecreasyQty(item: CartItem) {
    this.decreasyQty.emit(item);
  }

  emitRemove(item: CartItem) {
    this.decreasyQty.emit(item);
  }




}
