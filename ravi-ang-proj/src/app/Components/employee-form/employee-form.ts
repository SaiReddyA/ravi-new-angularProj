import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  imports: [],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnDestroy, OnInit {

  @Output() ChildEvent = new EventEmitter<string>();
  @Input() name: string = "";

  UpdateToParent(){
     this.ChildEvent.emit("Data from child to parent component");
  }
  employeesList: string[] = ["Ravi", "Kumar Chennai", "Ravi Andra", "Ravi Hyderabad", "Ravi Bangalore"];
  constructor(){
    console.log("EmployeeForm Component Constructed")
  }

  ngOnInit(): void {
     console.log("EmployeeForm Component Initialized");
 }

  ngOnDestroy(): void {
    console.log("EmployeeForm Component Destroyed");
  }

}
