import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpoAPIService {

  private apiUrl= "http://localhost:5000";

  constructor( private http : HttpClient) { }

  getIPOs():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/ipos`)
  }
}
