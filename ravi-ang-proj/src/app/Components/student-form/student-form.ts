import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Studentservice } from '../../Services/studentservice';

export interface Student {
  id: number;
  name: string;
  dob: string;
  age: number;
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


  studentForm!: FormGroup;

  constructor(private fb: FormBuilder, private studentservice: Studentservice) {
    this.studentForm = fb.group({
      id : new FormControl(),
      name: new FormControl(),
      dob: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      place: new FormControl(),
      pincode: new FormControl(),
      address: new FormControl()
    });
  }

  onSubmit() {
    const formData = this.studentForm.getRawValue() as Student; // ✅ always from form

  if (formData.id === 0) {
    formData.id = this.studentlist.length + 1;
    this.studentservice.AddStudent(formData).subscribe(() => {
      this.getstudentdata();
      this.studentForm.reset({ id: 0 });
    });
  } else {
    this.studentservice.UpdateStudent(formData).subscribe(() => {
      this.getstudentdata();
      this.studentForm.reset({ id: 0 });
    });
  }
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
  getstudentdata(): void {
    this.studentservice.getstudentlist().subscribe((data: Student[]) => {

      this.studentlist = data;
    });
  }

  ngOnInit(): void {
    this.getstudentdata();
  }

EditStudent(student: Student) {
  this.studentobject = { ...student };          
  this.studentForm.patchValue({ ...student }); // ✅ just patch the form, done!
}

  DeleteStudent(id: number) {
  this.studentservice.DeleteStudent(id).subscribe(() => {  // ✅ subscribe first
    this.getstudentdata(); // ✅ refresh AFTER delete completes
  });
}

}