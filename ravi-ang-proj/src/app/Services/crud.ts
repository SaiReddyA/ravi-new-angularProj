import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'platform',//any',  //'root',
})
export class CRUD {
  
// observableData = new Observable((res)=>{
//    res.next("This data is coming from observable in CRUD service"); 
//   res.next("Second value adding to observable in CRUD service"); 
// });

// promiseData = new Promise((resolve, reject)=>{
//   resolve("This data is coming from promise in CRUD service");
// });

   subjectObject = new Subject<string>();
   behaviourSubject = new BehaviorSubject<string>("Initial value");
  constructor() {
    //console.log("CRUD service constructor called");
    this.subjectObject.next("Adding message to it")

    this.behaviourSubject.next("First value added to behaviour subject");
    this.behaviourSubject.subscribe((data)=>{ 
      console.log("Subscriber 1: Data received from behaviour subject : " + data);
    });
    
    this.behaviourSubject.subscribe((data)=>{ 
      console.log("Subscriber 2: Data received from behaviour subject : " + data);
    });
    
    this.behaviourSubject.next(" third value added to behaviour subject");




    // this.observableData.subscribe((data)=>{
    //   console.log("Data received from observable : " + data);
    // });


    // this.promiseData.then((data)=>{
    //   console.log("Data received from promise : " + data);
    // });
   }


}

//  export class Crudservice{

// }
