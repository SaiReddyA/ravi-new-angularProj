import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhetherForecast {
  
  constructor(private http: HttpClient) { }

  getForecast(): Observable<any> {
      return this.http.get('http://localhost:5153/weatherforecast');
  }

  Add(): Promise<any> {
     let data = {
      'id': 0,
      'Sumary': 'whatadd'
     }
      return this.http.post('http://localhost:5153/weatherforecast', data).toPromise();
  }

  put(): Observable<any> {
     let data = {
      'id': 1,
      'Sumary': 'whattbvd'
     }
      return this.http.put('http://localhost:5153/weatherforecast', data);
  }

  delete(): Observable<any> {
    return this.http.delete('http://localhost:5153/weatherforecast?id=6');
  } 
}
