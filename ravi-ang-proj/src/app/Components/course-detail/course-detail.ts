import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-detail',
  imports: [FormsModule, NgIf],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail {
isSubmitted: boolean = false;
SubmitCourse(courseForm:any): void {
  console.log('Course Name:', courseForm?.value);
  // if(courseForm?.valid){
  //   console.log('Form is valid. Submitting data...');
  // } else {
  //   console.log('Form is invalid. Please fill out all required fields.');
  // }
  if(courseForm?.value.couseName?.includes('@')){
    console.log('Course Name should not contain @ symbol.');
    this.isSubmitted = true;
    return;
  }

  if(courseForm?.value.couseName && courseForm?.value.CourseDescription){
   console.log('Course Name:', courseForm?.value);
  }
  else {
    console.log('Form is invalid. Please fill out all required fields.');
  }
}


}
