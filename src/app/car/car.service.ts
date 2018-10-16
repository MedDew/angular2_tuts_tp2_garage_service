import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Car } from '../cars/shared/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService 
{
  cars: Car[];

  constructor() 
  { 
    this.cars = [
                    new Car(1, "Skoda", "Fabia", 105, 1000, 15000, 5),
                    new Car(2, "Toyota", "Auris", 100, 1000, 25000, 5),
                    new Car(3, "Toyota", "Auris", 100, 1000, 25000, 5),
                    new Car(4, "Hyundai", "Tucson", 150, 1600, 30000, 5),
                    new Car(5, "Opel", "Crossland X", 140, 1289, 18000, 5)
                ];
  }

  getAllCars()
  {
    return Observable.of(this.cars);
  };
  getCar(id : number)
  {
    return Observable.of(this.cars[id])
  };
  postCar(car : Car){};
  putCar(car : Car){};
  deleteCar(car : Car){};
}
