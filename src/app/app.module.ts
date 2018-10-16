import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarService } from './car/car.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
