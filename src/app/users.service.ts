import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public URL: string = "https://62abe711bd0e5d29af16f450.mockapi.io/users"
  constructor(private _httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this._httpClient.get(this.URL + "?limit=10&page=1");
  };
  getFilteredFUsers(term: string): Observable<any> {
    return this._httpClient.get(this.URL + "?filter=" + term);
  };

  getSortedUsers(column: string, order: string): Observable<any> {
    return this._httpClient.get(this.URL + "?sortBy=" + column + "&order=" + order);
  };
  getPageUsers(page: number, limit: number): Observable<any> {
    return this._httpClient.get(this.URL + "?limit=" + limit + "&page=" + page);
  };
  deleteUser(id:string):Observable<any>{
    return this._httpClient.delete(this.URL+"/"+id);
  }
}
