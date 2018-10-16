import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../cars/shared/car.model';
import { CarService } from '../car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit 
{
  @Input() cars : Car[];
  @Output()  onSelected = new EventEmitter<Car>();
  //cars = [];

  constructor(private carService: CarService) 
  {

  }

  onSelect(selectedCar : Car)
  {
    this.onSelected.emit(selectedCar);
  }

  ngOnInit() 
  {
    this.carService.getAllCars().subscribe(cars => this.cars = cars);
    /*console.log("CarListComponent.ngOnInit : "+this.cars[0].id);
    console.log("CarListComponent.ngOnInit : "+this.carService.getAllCars());
    for (let c in this.carService.getAllCars())
    {
      console.log("CarListComponent.ngOnInit : "+c);
    }*/
  }

}
