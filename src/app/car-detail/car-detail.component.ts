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
  @Input() createdCar : Car;
  // private car : Car;
  public isEdit : boolean;
  public isCreate : boolean;
  public isDelete : boolean;
  private static maxId : number;

  constructor(private carService : CarService) 
  {
    /*
    this.carService.getAllCars().subscribe(car => this.selectedCar = car[0]);
    console.log("this.car : "+this.selectedCar.id);
    */
    this.isEdit = false;
    this.isCreate = false;
    this.isDelete = false;
  }

  ngOnInit() 
  {
    /*
    console.log("CarDetailComponent.ngOnInit : "+this.selectedCar);
    this.carService.getCar(0).subscribe(car => this.selectedCar = car);
    console.log("CarDetailComponent.ngOnInit : "+this.selectedCar);
    */
   let carList : Car[] = [];
    this.carService.getAllCars().subscribe(c => {
      carList = c; 
      console.log(" Number of cars : "+carList.length)
      
      carList.forEach(c => {
        console.log("car : "+c.id);
      });

      CarDetailComponent.maxId = carList.reduce(function(e1,e2){
        let isUpper : boolean = e1.id > e2.id;
        console.log("is Upper : "+isUpper);
        console.log("id : "+e1.id+"=>"+e1.model+" | "+e2.id+"=>"+e2.model);
        return isUpper ? e1 : e2;
      }).id;

    });
    console.log("Number of cars outside Observable : "+carList.length);
    
    // carList.reduce(function(e1, e2){
    //   console.log(e1.id > e2.id);
    // });
  }

  toggleEdit()
  {
    this.isEdit = !this.isEdit;
    //Set creation mode explicitly to false
    this.isCreate = false;
    //Set deletion mode explicitly to false
    this.isDelete = false;
  }
  
  toggleCreate()
  {
    this.isCreate = !this.isCreate;
    //Set edition mode explicitly to false
    this.isEdit = false;
    //Set deletion mode explicitly to false
    this.isDelete = false;
    
    //Incrementing the highest id by 1
    CarDetailComponent.maxId = CarDetailComponent.maxId + 1;
    console.log("MAX Id : "+CarDetailComponent.maxId);

    //Initialize the new car to be created
    this.createdCar = new Car();
    this.createdCar.id = this.getMaxId();
  }

  toggleDelete()
  {
    this.isDelete = !this.isDelete;
    this.isEdit = false;
    this.isCreate = false;
  }

  getMaxId() : number
  {
    return CarDetailComponent.maxId;
  }

  modify()
  {
    this.carService.putCar(this.selectedCar, (res) => { if(res){ this.isEdit = false } });
  }
  
  create()
  {
    this.carService.postCar(this.createdCar, (res) => { if(res){ this.isCreate = false } });
  }

  delete()
  {
    this.carService.deleteCar(this.selectedCar, (res) => {if(res){this.isDelete = false} });
  }

}
