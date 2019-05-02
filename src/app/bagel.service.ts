import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FoodQty } from './plain/plain.component';

@Injectable({
  providedIn: 'root'
})
export class BagelService {
  bagelAdded = new Subject<string>();

  constructor() { }
}
