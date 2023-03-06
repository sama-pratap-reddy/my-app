import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
public URL: string= "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"
  constructor(private _HttpClient:HttpClient) { }

  getVehicles(): Observable<any> {
    return this._HttpClient.get(this.URL + "?limit=5&page=1");
  };
  getFilteredVehicles(term: string): Observable<any> {
    return this._HttpClient.get(this.URL + "?filter=" + term);
  };

  getSortedVehicles(column: string, order: string): Observable<any> {
    return this._HttpClient.get(this.URL + "?sortBy=" + column + "&order=" + order);
  };
  getPageVehicles(page: number, limit: number): Observable<any> {
    return this._HttpClient.get(this.URL + "?limit=" + limit + "&page=" + page);
  };
  deleteVehicles(id:string):Observable<any>{
    return this._HttpClient.delete(this.URL+"/"+id);
  };
}


