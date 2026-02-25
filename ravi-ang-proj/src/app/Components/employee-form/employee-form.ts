import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  imports: [],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnDestroy, OnInit {

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
