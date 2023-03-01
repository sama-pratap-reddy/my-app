import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
   public cars:string="";
  // selectedCar = '';
  // cars = [
  //   {name: 'BMW', image: 'bmw.jpg'},
  //   {name: 'Audi', image: 'audi.jpg'},
  //   {name: 'Tesla', image: 'tesla.jpg'}
  // ];
}
