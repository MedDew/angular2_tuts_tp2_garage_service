import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarService } from './car/car.service';
import { APPCONFIG } from './app.config';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarsModule,
    HttpModule
  ],
  providers: [{provide: APPCONFIG.CARS_API_URL, useValue : APPCONFIG.CARS_API_URL}],//[CarService]
  bootstrap: [AppComponent]
})
export class AppModule { }
