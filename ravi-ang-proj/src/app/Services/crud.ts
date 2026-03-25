import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Employee } from '../Components/employee-list/employee-list';


@Injectable({
  providedIn: 'platform',//any',  //'root',
})
export class CRUD {

  /* Observable and Promise examples and Subject and BehaviourSubject examples in Angular service.
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
*/

employeeData : Employee[] = [
  {id: 1, name: "Ravi Kumar", age: 30, city: "Chennai"},
  {id: 2, name: "Kumar Andra", age: 28, city: "Andhra"},
  {id: 3, name: "Ravi Hyderabad", age: 32, city: "Hyderabad"},
  {id: 4, name: "Ravi Bangalore", age: 29, city: "Bangalore"},
]

constructor() {
}

getEmployeesOption1(): Observable<Employee[]>{
  return new Observable((res)=>{
    res.next(this.employeeData);
  });
}

getEmployeesOption2(): Observable<Employee[]>{
  return of(this.employeeData);
}

AddEmployee(employee: Employee): void{
  this.employeeData.push(employee);
}

UpdateEmployee(employee: Employee): void{
  const index = this.employeeData.findIndex(emp => emp.id === employee.id);

  if (index !== -1) {
    this.employeeData[index] = employee;
  } else {
    console.log("Employee not found for update");
  }
}

DeleteEmployee(employeeId: number): void{
   const index = this.employeeData.findIndex(emp => emp.id === employeeId);
   if (index !== -1) {
     this.employeeData.splice(index, 1);
   } else {
     console.log("Employee not found for deletion");
   }
  
}


}

//  export class Crudservice{

// }
