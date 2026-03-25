import { Component, inject, OnInit, Output } from '@angular/core';
import { EmployeeForm } from '../employee-form/employee-form';
import { CRUD } from '../../Services/crud';
import { FormsModule } from '@angular/forms';

export interface Employee{
  id: number;
  name: string;
  age: number;
  city: string;  
}

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeForm, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
 /**Parent and Child communication Concept */
  username: string = "Ravi Kumar passing information to child component";
  nameChange: string = ""; 
  receiveMessage($event: any){
    console.log("Message received from child component : " + $event);
    this.nameChange = $event;
  }

/* dependency injection
constructor(public curd: CRUD, private crud1: CRUD) {
  console.log("Employee List component constructor called");
}
curdobj  = inject(CRUD);
*/

/** List Curd Operations */
employeeList: Employee[] = [];

employeeObject: any = {
  id: 0,
  name: "",
  age: 0,
  city: ""
};

constructor(private curd: CRUD) {

}
ngOnInit(): void {
  this.GetEmployees();
}

GetEmployees(): void{
  this.curd.getEmployeesOption1().subscribe((data: Employee[])=>{
    console.log("Employee data received from service Option 1 : " + JSON.stringify(data));
    this.employeeList = data;
  });

  this.curd.getEmployeesOption2().subscribe((data: Employee[])=>{
    console.log("Employee data received from service Option 2 : " + JSON.stringify(data));
  });
}

AddEmployee(): void{
  debugger
  /* Basic implementation with using service method
  const newEmployee: Employee = {
    id: this.employeeList.length + 1,
    name: "New Employee " + (this.employeeList.length + 1),
    age: 25,
    city: "City " + (this.employeeList.length + 1)
  };
  this.curd.AddEmployee(newEmployee);
  this.GetEmployees(); // Refresh the employee list after adding a new employee
  */

  /* Implementation with using two way binding and service method */
  if(this.employeeObject.id === 0){
    this.employeeObject.id = this.employeeList.length + 1; // Auto-generate ID based on the current list length
    this.curd.AddEmployee(this.employeeObject);
    this.GetEmployees(); // Refresh the employee list after adding a new employee
    this.employeeObject = {} as Employee; // Clear the form after adding an employee
   } else if(this.employeeObject.id > 0){
    // Update employee logic can be implemented here
    this.curd.UpdateEmployee(this.employeeObject);
    this.GetEmployees();
   }
   else{
    console.log("Employee details are not valid");
   }
  }

  EditEmployee(paramEmployee: Employee): void {
      this.employeeObject = paramEmployee; // Populate the form with selected employee details for editing
  }

  DeleteEmployee(id:number){
    this.curd.DeleteEmployee(id)
    this.employeeObject = {} as Employee; // Clear the form after deleting an employee
    this.GetEmployees(); // Refresh the employee list after deleting an employee
  }
}
