import { Component, inject, Output } from '@angular/core';
import { EmployeeForm } from '../employee-form/employee-form';
import { CRUD } from '../../Services/crud';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeForm],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
 username: string = "Ravi Kumar passing information to child component";
 nameChange: string = ""; 
  receiveMessage($event: any){
    console.log("Message received from child component : " + $event);
    this.nameChange = $event;
  }

//dependency injection
constructor(public curd: CRUD, private crud1: CRUD) {
  console.log("Employee List component constructor called");
}
curdobj  = inject(CRUD);


}
