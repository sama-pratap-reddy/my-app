import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  // public cars:any=[];
  selectedCar = '';
  cars = [
    {name: 'BMW', },
    // {image: 'asset.bmw.jpg'},
    {name: 'Audi', image: 'asset.audi.jpg'},
    {name: 'Tesla', image: 'asset.tesla.jpg'}
  ];
}
