import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { BagelService } from '../bagel.service';
import { MatSelect, MatRadioButton } from '@angular/material';

export interface FoodQty{
  value: string;
  viewValue: string;
  
}

export interface Schmear {
  schmearName: string;
}

@Component({
  selector: 'app-plain',
  templateUrl: './plain.component.html',
  styleUrls: ['./plain.component.css']
})
export class PlainComponent {

  constructor(private bagelService: BagelService) { }

  foods: FoodQty[] = [
    {value: '1', viewValue: '1'},
    {value: '2-qty', viewValue: '2'},
    {value: '3-qty', viewValue: '3'},
  ];
  
  typeSchmear: Schmear[] = [ 
    {schmearName:'Honey Paste'},
    {schmearName:'Peanut Butter'},
    {schmearName: 'Cream Cheese'},
];

  submit(foodSelect: MatSelect, schmearName:MatRadioButton) {

    console.log(foodSelect);
    const Qtyvalue = foodSelect.value;
    
    this.bagelService.bagelAdded.next(Qtyvalue);
  }
 }
