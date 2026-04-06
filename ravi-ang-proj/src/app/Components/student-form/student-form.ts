import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Studentservice } from '../../Services/studentservice';
import { AsyncPipe, TitleCasePipe , UpperCasePipe } from '@angular/common';
import { MaskPincodePipe } from '../../mask-pincode-pipe';
import { pincodeValidator } from '../../pincode.validator'; 
import { WhetherForecast } from '../../Services/whether-forecast';
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
  imports: [ReactiveFormsModule , TitleCasePipe, UpperCasePipe , MaskPincodePipe, AsyncPipe],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {


  studentForm!: FormGroup;

  constructor(private fb: FormBuilder, public studentservice: Studentservice, private whetherForecast: WhetherForecast) {
    this.studentForm = fb.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],   //  all in one array
      dob: ['', Validators.required],
      age: [0],
      gender: ['', Validators.required],
      place: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      pincode: ['', [Validators.required, pincodeValidator, Validators.pattern('^[1-9][0-9]{5}$')]],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    });
  }

  get name() { return this.studentForm.get('name'); }
  get dob() { return this.studentForm.get('dob'); }
  get age() { return this.studentForm.get('age'); }
  get gender() { return this.studentForm.get('gender'); }
  get place() { return this.studentForm.get('place'); }
  get pincode() { return this.studentForm.get('pincode'); }
  get address() { return this.studentForm.get('address'); }

  // add this getter
  get today(): string {
    return new Date().toISOString().split('T')[0]; // returns "2026-03-30"
  }

  onSubmit() {
    if (this.studentForm.invalid) {
    this.studentForm.markAllAsTouched(); //  to show validation errors if user tries to submit without filling the form
    return;
  }
    const formData = this.studentForm.getRawValue() as Student; //  always from form

    if (formData.id === 0) {
      formData.id = this.studentlist.length + 1;
      this.studentservice.AddStudent(formData).then(() => {
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
    const test = this.studentForm.get('name');
    test?.valueChanges
    // for auto age calculation based on dob
    this.dob?.valueChanges.subscribe((dobValue: string) => {
      if (dobValue) {
        const age = this.calculateAge(new Date(dobValue));
        this.age?.setValue(age, { emitEvent: true });
      } else {
        this.age?.setValue(null);
      }
    });

    this.age?.valueChanges.subscribe((ageValue: number) => {
      console.log('Age value changed: ' + ageValue);
    } );

    this.whetherForecast.getForecast().subscribe((forecast) => {
      console.log("Weather Forecast API response : " + JSON.stringify(forecast));
    });
    this.whetherForecast.put().subscribe((response) => {
      console.log("PUT API response : " + JSON.stringify(response));
    });
      this.whetherForecast.delete().subscribe((response) => {
      console.log("DELETE API response : " + JSON.stringify(response));
    } );


  this.studentservice.postLgoginData().subscribe((response)=>{
      console.log("Login API response : " + JSON.stringify(response));
  });

  }

  display()
  {
    console.log('age value from form control changed : ' + this.age?.value);
  }


calculateAge(dob: Date): number {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();

  const monthDiff = today.getMonth() - dob.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
}

  EditStudent(student: Student) {
    this.studentobject = { ...student };
    this.studentForm.patchValue({ ...student }); //  just patch the form, done!
  }

  DeleteStudent(id: number) {
    this.studentservice.DeleteStudent(id).subscribe(() => {  //  subscribe first
      this.getstudentdata(); // ✅ refresh AFTER delete completes
    });
  }

}