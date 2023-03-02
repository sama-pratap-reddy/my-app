import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _HttpClient:HttpClient) { }
  getFlipkart():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/products");
};
};
