import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'platform',//any',  //'root',
})
export class CRUD {
  
observableData = new Observable((res)=>{
  debugger
  res.next("This data is coming from observable in CRUD service"); 
  res.next("Second value adding to observable in CRUD service"); 
});

promiceData = new Promise((resolve, reject)=>{
  resolve("This data is coming from promice in CRUD service");
});

  constructor() {
    console.log("CRUD service constructor called");

    this.observableData.subscribe((data)=>{
      console.log("Data received from observable : " + data);
    });


    this.promiceData.then((data)=>{
      console.log("Data received from promice : " + data);
    });
   }

}

//  export class Crudservice{

// }
