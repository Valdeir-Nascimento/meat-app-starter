import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shopppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shopppingCartService.items;
  }

  total(): number {
    return this.shopppingCartService.total();
  }

  addItem(item: any) {
    this.shopppingCartService.addItem(item);
  }

  removeItem(item: any) {
    this.shopppingCartService.removeItem(item);
  }

  clear() {
    this.shopppingCartService.clear;
  }

}
