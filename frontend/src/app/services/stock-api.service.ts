import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  private apiUrl= "http://localhost:5000";
  constructor( private http : HttpClient) { }

  getStocks():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/stocks`)
  }
}
