import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhetherForecast {
  
  constructor(private http: HttpClient) { }

  getForecast(): Observable<any> {
      return this.http.get('https://localhost:7228/api/Auth');
  }

  put(): Observable<any> {
     let data = {
      'id': 0,
      'sumary': 'what'
     }
      return this.http.put('https://localhost:7228/api/Auth?id=2&sumary=test', data);
  }

  delete(): Observable<any> {
    return this.http.delete('https://localhost:7228/api/Auth?id=2');
  } 
}
