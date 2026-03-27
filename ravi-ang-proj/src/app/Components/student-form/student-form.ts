import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Studentservice } from '../../Services/studentservice';

export interface Student {
  id: number;
  name: string;
  dob: string;
  age: number ;
  gender: string;
  place: string;
  address: string;
  pincode: string;
}

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {

  
  studentForm!:FormGroup;

  constructor( private fb : FormBuilder , private studentservice: Studentservice) {
    this.studentForm = fb.group({
      name: new FormControl(),
      dob: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      place: new FormControl(),
      pincode: new FormControl(),
      Address: new FormControl()
    });
  }

  onSubmit(){ 
    console.log(this.studentForm.value); 
  }

  studentobject: Student = {
    id: 0,
    name: "",
    dob: "",
    age: 0,
    gender: "",
    place: "",
    address: "",
    pincode: ""
  };  
 
 studentlist: Student[] = [];
  getstudentdata():void{
    this.studentservice.getstudentlist().subscribe((data: Student[])=>{
      
      this.studentlist = data;
    });
  }

  ngOnInit(): void {
  this.getstudentdata();
}
}