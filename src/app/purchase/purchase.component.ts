import { Component } from '@angular/core';
import { PlainComponent } from '../plain/plain.component';
import { MatDialog } from '@angular/material';
import { BlueberryComponent } from '../blueberry/blueberry.component';
import { ChocolateComponent } from '../chocolate/chocolate.component';
import { CoffeeteaComponent } from '../coffeetea/coffeetea.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {

  title = 'Ken Coffe & Bagels';
  constructor(public dialog: MatDialog){}
  
  openDialogPlainBagel(): void{
    let dialogRef = this.dialog.open(PlainComponent,{    
    height: '450px',
    width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog is closed');
    });
  }

  openDialogBlueberryBagel(): void{
    let dialogRef = this.dialog.open(BlueberryComponent,{    
      height: '450px',
      width: '550px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog is closed');
      });
  }
  openDialogChocolateBagel()
  {
    let dialogRef = this.dialog.open(ChocolateComponent,{    
      height: '450px',
      width: '550px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog is closed');
      });
  }
  openDialogCoffeeTea()
  {
    let dialogRef = this.dialog.open(CoffeeteaComponent,{    
      height: '450px',
      width: '550px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog is closed');
      });
  }
}
