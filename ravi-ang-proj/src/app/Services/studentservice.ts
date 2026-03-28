import { Injectable } from '@angular/core';
import { Student } from '../Components/student-form/student-form';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {
  studentSamples: Student[] = [
    {
      id: 1,
      name
      : "Ravi Kumar",
      dob: "2000-06-15",
      age: 24,
      gender: "Male",
      place: "Chennai",
      address: "No.12, Anna Nagar, Chennai, Tamil Nadu",
      pincode: "600040"
    },
    {
      id: 2,
      name: "Priya Sharma",
      dob: "2002-03-22",
      age: 22,
      gender: "Female",
      place: "Mumbai",
      address: "Flat 4B, Shivaji Nagar, Bandra West, Mumbai, Maharashtra",
      pincode: "400050"
    },
    {
      id: 3,
      name: "Arjun Nair",
      dob: "1999-11-08",
      age: 25,
      gender: "Male",
      place: "Kochi",
      address: "TC 25/1190, Pattom Palace Road, Thiruvananthapuram, Kerala",
      pincode: "695004"
    },
    {
        id: 4,
      name: "Sneha Reddy",
      dob: "2003-07-30",
      age: 21,
      gender: "Female",
      place: "Hyderabad",
      address: "Plot No.88, Jubilee Hills, Road No.36, Hyderabad, Telangana",
      pincode: "500033"
    },
    {
      id: 5,
      name: "Mohammed Farhan",
      dob: "2001-01-14",
      age: 54,   // ← shows null is also valid as per interface
      gender: "Other",
      place: "Bangalore",
      address: "No.7, MG Road, Indiranagar, Bangalore, Karnataka",
      pincode: "560038"
    }
  ];

  getstudentlist(): Observable<Student[]> {
    return of (this.studentSamples);
  }

  AddStudent(student: Student): Observable<Student> {
    this.studentSamples.push(student);
    return of(student);
  }
 UpdateStudent(student: Student): Observable<Student> {
 
    const index = this.studentSamples.findIndex(s => s.id === student.id);    
    if (index !== -1) {
      this.studentSamples[index] = student;
      return of(student);
    }
   else {
    console.log("Student not found for update");
    return of(student);
    }
  }

 DeleteStudent(studentId: number): Observable<boolean> {
    const index = this.studentSamples.findIndex(s => s.id === studentId   );
    if (index !== -1) {
      this.studentSamples.splice(index, 1)  ;
      return of(true);
    }
   else {
    console.log("Student not found for update");
    }
    return of(false );
  }

 
}
