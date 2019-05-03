import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatCheckboxModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { PlainComponent } from './plain/plain.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BagelService } from './bagel.service';
import { AppRoutingModule } from './app-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { BlueberryComponent } from './blueberry/blueberry.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { CoffeeteaComponent } from './coffeetea/coffeetea.component';


@NgModule({
  declarations: [
    AppComponent,
    PlainComponent,
    ShoppingCartComponent,
    PurchaseComponent,
    BlueberryComponent,
    ChocolateComponent,
    CoffeeteaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    AppRoutingModule
  ],
  entryComponents: [
    PlainComponent,
    BlueberryComponent,
    ChocolateComponent,
    CoffeeteaComponent
  ],
  providers: [BagelService],
  bootstrap: [AppComponent]
})

export class AppModule { }
