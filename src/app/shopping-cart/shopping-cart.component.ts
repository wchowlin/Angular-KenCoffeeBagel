import { Component, OnInit } from '@angular/core';
import { BagelService } from '../bagel.service';
import { FoodQty } from '../plain/plain.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: string[] = [];

  constructor(private bagelService: BagelService ) { }

  ngOnInit() {
    this.bagelService.bagelAdded.subscribe(foodItem => {
      this.items.push(foodItem);
    });
  }

}
