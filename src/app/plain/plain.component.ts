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
  selector: 'app-plain',
  templateUrl: './plain.component.html',
  styleUrls: ['./plain.component.css']
})
export class PlainComponent {

  constructor(private bagelService: BagelService) { }

  foodQty: FoodQty[] = [
    {value: 'Plain Bagel - Honey Paste           x1            $1.50', viewValue: '1'},
    {value: 'Plain Bagel - Cream Cheese          x2            $3.00', viewValue: '2'},
    {value: 'Plain Bagel - Peanut Butter         x3            $4.50', viewValue: '3'},
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
 
