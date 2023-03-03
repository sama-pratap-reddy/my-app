import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoredomsService {

  constructor(private _HttpClient:HttpClient) {}
  getboredoms():Observable<any>{
    return this._HttpClient.get("https://www.boredapi.com/api/activity")
}
}