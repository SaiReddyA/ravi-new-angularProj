import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISubject } from '../Components/subject/subject';

@Injectable({
  providedIn: 'root',
})
export class Subjectservice {
  
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:5153/subject';

  // getSubjects() {
  //   return this.http.get(this.baseUrl);
  // }

 getSubjects(): Observable<ISubject[]> {
  return this.http.get<string[]>(this.baseUrl).pipe(
    map((data: string[]) =>
      data.map((item, index) => ({
        id: index,
        name: item
      }))
    )
  );
}

  addSubject(subject: any): Observable<any> {
    return this.http.post(this.baseUrl, subject);
  }

  updateSubject(subject: any, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}?id=${id}`, subject);
  }

  deleteSubject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${id}`);
  }

}
