export class Car
{
  private _isRunning: boolean;
  public id: number;
  public brand: string;
  public model: string;
  public horsePower: number;
  public weight: number;
  public nbSeats: number;
  public price: number;

  constructor()
  constructor(id:number, brand: string, model: string, horsePower : number,
              weight: number, price : number, nbSeats: number)
  constructor(id?:number, brand?: string, model?: string, horsePower? : number,
              weight?: number, price? : number, nbSeats?: number)
  {
      this._isRunning = false;
      this.id = id;
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.horsePower = horsePower;
      this.weight = weight;
      this.nbSeats = nbSeats;
  }
}
