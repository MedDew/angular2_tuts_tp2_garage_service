import { Component, OnInit } from '@angular/core';
import { Car } from './shared/car.model';
import { CarService } from '../car/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit 
{
  cars: Car[];
  selectedCar: Car;

  constructor(private carService: CarService) 
  { 
    /*this.cars.push(
                    new Car(1, "Skoda", "Fabia", 105, 1000, 15000, 5),
                    new Car(2, "Toyota", "Auris", 100, 1000, 25000, 5),
                    new Car(3, "Toyota", "Auris", 100, 1000, 25000, 5),
                    new Car(4, "Hyundai", "Tucson", 150, 1600, 30000, 5),
                    new Car(5, "Opel", "Crossland X", 140, 1289, 18000, 5)
    );*/
  }

  onSelect(car :Car) : Car
  {
    console.log("CARS : "+this.cars);
    this.cars.forEach((c) => {
        if(c.id === car.id)
        {
          this.selectedCar = c;
        }
      });
      //return null;
      return this.selectedCar;
  }

  ngOnInit() 
  {
    this.carService.getAllCars().subscribe(cars => this.cars = cars);
    console.log("CarsComponent.ngOnInit : "+this.cars);
  }

}
