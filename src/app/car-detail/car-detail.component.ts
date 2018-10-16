import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../cars/shared/car.model';
import { CarService } from '../car/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit 
{
  @Input() selectedCar : Car;
  // private car : Car;

  constructor(private carService : CarService) 
  {
    /*
    this.carService.getAllCars().subscribe(car => this.selectedCar = car[0]);
    console.log("this.car : "+this.selectedCar.id);
    */
  }

  ngOnInit() 
  {
    /*
    console.log("CarDetailComponent.ngOnInit : "+this.selectedCar);
    this.carService.getCar(0).subscribe(car => this.selectedCar = car);
    console.log("CarDetailComponent.ngOnInit : "+this.selectedCar);
    */
  }

}
