import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpoAPIService {

  private apiUrl= "https://finnhub.io/api/v1";

  constructor( private http : HttpClient) { }

  getIPOs():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/calendar/ipo`)
  }
}
