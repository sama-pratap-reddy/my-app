import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  public phones:any=[
    {company:'samsung',price:10000},
    {company:'iphone',price:50000},
    {company:'redmi',price:20000},
    {company:'nokia',price:400000}
  ];

}
