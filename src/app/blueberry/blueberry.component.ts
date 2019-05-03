import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { BagelService } from '../bagel.service';
import { MatSelect, MatRadioButton, MatRadioGroup } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

export interface FoodQty{
  value: string;
  viewValue: string;
  
}

export interface FoodType{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-blueberry',
  templateUrl: './blueberry.component.html',
  styleUrls: ['./blueberry.component.css']
})
export class BlueberryComponent {

  constructor(private bagelService: BagelService) { }

  foodQty: FoodQty[] = [
    {value: 'Blueberry Bagel - Honey Paste  x1    $1.50', viewValue: '1'},
    {value: 'Blueberry Bagel - Cream Cheese Paste  x2    $3.00', viewValue: '2'},
    {value: 'Blueberry Bagel - Peanut Butter Paste  x3    $4.50', viewValue: '3'},
  ];

  foodType: FoodType[] = [
    {value: '1-qty', viewValue: 'Honey Paste'},
    {value: '2-qty', viewValue: 'Cream Cheese'},
    {value: '3-qty', viewValue: 'Peanut Butter'},
  ];
    

  submit(foodSelect: MatSelect) {
    console.log(foodSelect.value);
    const Qtyvalue = foodSelect.value;
    this.bagelService.bagelAdded.next(Qtyvalue);
  }
}
