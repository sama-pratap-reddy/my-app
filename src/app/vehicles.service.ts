import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _HttpClient:HttpClient) { }
  getVehicles():Observable<any>{
    return this._HttpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  }
}
