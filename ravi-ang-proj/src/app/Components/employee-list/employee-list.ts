import { Component, Output } from '@angular/core';
import { EmployeeForm } from '../employee-form/employee-form';

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
}
