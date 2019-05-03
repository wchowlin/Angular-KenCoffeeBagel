import { Component,OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
  selector: 'app-coffeetea',
  templateUrl: './coffeetea.component.html',
  styleUrls: ['./coffeetea.component.css']
})
export class CoffeeteaComponent{

  constructor(private bagelService: BagelService) { }

  foodQty: FoodQty[] = [
    {value: 'Coffee       x1        $1.00', viewValue: '1'},
    {value: 'Tea          x2        $1.50', viewValue: '2'},
  ];

  foodType: FoodType[] = [
    {value: '1-qty', viewValue: 'Coffee'},
    {value: '2-qty', viewValue: 'Tea'},
  ];
    

  submit(foodSelect: MatSelect) {
    console.log(foodSelect.value);
    const Qtyvalue = foodSelect.value;
    this.bagelService.bagelAdded.next(Qtyvalue);
  }

}
