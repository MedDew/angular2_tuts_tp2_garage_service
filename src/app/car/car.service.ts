import { Injectable, Inject } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import { Car } from '../cars/shared/car.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { APPCONFIG } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class CarService 
{
  cars: Car[];

  /*constructor() 
  { 
    this.cars = [
                    new Car(1, "Skoda", "Fabia", 105, 1000, 15000, 5),
                    new Car(2, "Toyota", "Auris", 100, 1000, 25000, 5),
                    new Car(3, "Toyota", "Auris", 100, 1000, 25000, 5),
                    new Car(4, "Hyundai", "Tucson", 150, 1600, 30000, 5),
                    new Car(5, "Opel", "Crossland X", 140, 1289, 18000, 5)
                ];
  }*/
  constructor(private http : Http, @Inject(APPCONFIG.CARS_API_URL) private apiURL)
  {

  }

  getAllCars()
  {
    // return Observable.of(this.cars);
    console.log("HTTP : "+this.http);
    console.log("HTTP URL : "+this.apiURL);
    return this.http.get(`${this.apiURL}/cars`).map(res => res.json());
  }


  getCar(id : number)
  {
    //return Observable.of(this.cars[id]);
    return this.http.get(`${this.apiURL}/cars/${id}`).map(res => res.json());
  }
  
  
  postCar(car : Car, onNext : (car : Car) => void)
  {
    /*
    let requestOptions = new RequestOptions();
    let headers = new Headers({
      "Accept" : "application/json",
      "Content-Type" : "application/json",
    });

    requestOptions = requestOptions.merge({headers : headers});
    */
    
    let headers = new Headers(
      {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
      }
      );
    let requestOptions = new RequestOptions({headers : headers});

    console.log("POSTING CAR : "+car.id+" => "+car.model);
    console.log("Stringify POSTED CAR : "+JSON.stringify(car));
    this.http.post(`${this.apiURL}/cars`, JSON.stringify(car), requestOptions)
    .map(response => <Car>response.json())
    .subscribe(onNext, error => console.log("An error occured when posting : "+this.apiURL+"/cars with "+car.id));
  }


  putCar(car : Car, onNext: (res: boolean) => void)
  {
    let requestOptions = new RequestOptions();
    let headers = new Headers(
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    );
    requestOptions = requestOptions.merge({headers : headers});

    this.http.put(`${this.apiURL}/cars/${car.id}`, JSON.stringify(car), requestOptions).map((res) => {
        if(res.status != 200)
        {
          throw new Error('The update request has failed : ' + res.status);
        }
        console.log(`The car ${car.brand} ${car.model} has been updated on this features : <br/> seats : ${car.nbSeats} <br/> 
        price: ${car.price}`);
        return true;
    }).subscribe(onNext,
        error =>
        console.log(`An error occurred when putting ${this.apiURL}.`, error));
  }

  deleteCar(car : Car, onNext : (res : boolean) => void)
  {
    this.http.delete(`${this.apiURL}/cars/${car.id}`)
    .map(response => {
      if(response.status != 200)
      {
        throw new Error("The delete request has failed : "+response.status);
      }
      return true;
    })
    .subscribe(onNext, error => console.log("An error occured when deleting : "+this.apiURL+"/cars/"+car.id, error));

  }
}
